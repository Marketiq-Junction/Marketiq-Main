"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertTriangle, XCircle, Download, MapPin, Star, Clock, Phone, Image, Users } from "lucide-react";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+55", name: "Brazil" },
  { code: "+234", name: "Nigeria" },
];

const GMBAuditWebsite = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessUrl, setBusinessUrl] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const displayToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const fetchGMBData = async (url) => {
    try {
      const response = await fetch("http://localhost:5000/api/gmb-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to fetch GMB data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching GMB data:", error);
      displayToast("Failed to fetch business data", "error");
      return null;
    }
  };

  const sendWhatsAppViaBackend = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-gmb-report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, reportData }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        console.error("Backend returned error:", errText);
        return { success: false, error: errText };
      }

      return await response.json();
    } catch (error) {
      console.error("Backend API Error:", error);
      return { success: false, error: error.message };
    }
  };

  const sendWhatsAppPDF = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-gmb-pdf",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, reportData }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        console.error("PDF send error:", errText);
        return { success: false, error: errText };
      }

      return await response.json();
    } catch (error) {
      console.error("PDF send error:", error);
      return { success: false, error: error.message };
    }
  };

  const downloadPDFReport = async (reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/download-gmb-pdf-report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reportData }),
        }
      );

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "GMB_Report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      displayToast("PDF downloaded successfully!", "success");
    } catch (err) {
      console.error("PDF download failed:", err);
      displayToast("Failed to download PDF", "error");
    }
  };

  const calculateGMBScore = (data) => {
    let score = 0;
    let maxScore = 100;

    // Profile Completeness (30 points)
    if (data.hasName) score += 5;
    if (data.hasAddress) score += 5;
    if (data.hasPhone) score += 5;
    if (data.hasWebsite) score += 3;
    if (data.hasHours) score += 4;
    if (data.hasCategory) score += 4;
    if (data.hasDescription) score += 4;

    // Visual Content (25 points)
    if (data.hasLogo) score += 5;
    if (data.hasCoverPhoto) score += 5;
    score += Math.min(data.photosCount / 2, 15); // Max 15 points for photos

    // Reviews & Engagement (25 points)
    score += Math.min(data.reviewCount / 10, 10); // Max 10 points
    score += Math.min(data.rating * 3, 15); // Max 15 points

    // Posts & Updates (10 points)
    score += Math.min(data.postsCount, 10);

    // Responses (10 points)
    score += Math.min(data.responseRate, 10);

    return Math.min(Math.round(score), maxScore);
  };

  const handleSubmit = async () => {
    if (!businessName || !businessUrl || !email || !whatsappNumber) {
      displayToast("Please fill all fields", "error");
      return;
    }

    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    if (cleanNumber.length < 4) {
      displayToast("Please enter a valid WhatsApp number", "error");
      return;
    }

    const fullNumber =
      countryCode.replace("+", "") +
      whatsappNumber.replace(/^0+/, "").replace(/\D/g, "");

    setLoading(true);
    setShowResults(false);

    try {
      // Simulate GMB data fetch (in real scenario, use Places API)
      const gmbData = await fetchGMBData(businessUrl);

      // If API fails, use mock data for demo
      const mockData = gmbData || {
        hasName: true,
        hasAddress: true,
        hasPhone: true,
        hasWebsite: true,
        hasHours: true,
        hasCategory: true,
        hasDescription: true,
        hasLogo: true,
        hasCoverPhoto: true,
        photosCount: 25,
        reviewCount: 87,
        rating: 4.3,
        postsCount: 8,
        responseRate: 75,
        totalViews: 1250,
        searchViews: 850,
        mapsViews: 400,
        callClicks: 45,
        websiteClicks: 120,
        directionRequests: 95,
      };

      const overallScore = calculateGMBScore(mockData);

      // Calculate category scores
      const profileScore = Math.round(
        ((mockData.hasName ? 1 : 0) +
          (mockData.hasAddress ? 1 : 0) +
          (mockData.hasPhone ? 1 : 0) +
          (mockData.hasWebsite ? 1 : 0) +
          (mockData.hasHours ? 1 : 0) +
          (mockData.hasCategory ? 1 : 0) +
          (mockData.hasDescription ? 1 : 0)) /
          7 *
          100
      );

      const visualScore = Math.round(
        ((mockData.hasLogo ? 1 : 0) +
          (mockData.hasCoverPhoto ? 1 : 0) +
          Math.min(mockData.photosCount / 30, 1)) /
          3 *
          100
      );

      const engagementScore = Math.round(
        (Math.min(mockData.reviewCount / 100, 1) +
          mockData.rating / 5 +
          Math.min(mockData.responseRate / 100, 1)) /
          3 *
          100
      );

      const activityScore = Math.round(
        Math.min(mockData.postsCount / 10, 1) * 100
      );

      // Count issues
      let critical = 0,
        warning = 0,
        passed = 0;

      if (!mockData.hasName || !mockData.hasAddress || !mockData.hasPhone) critical++;
      if (!mockData.hasDescription || !mockData.hasCategory) critical++;
      if (!mockData.hasLogo || !mockData.hasCoverPhoto) warning++;
      if (mockData.photosCount < 10) warning++;
      if (mockData.reviewCount < 20) warning++;
      if (mockData.rating < 4.0) warning++;
      if (mockData.postsCount < 5) warning++;
      if (mockData.responseRate < 80) warning++;

      passed = 15 - critical - warning;

      const processedData = {
        businessName,
        businessUrl,
        overallScore,
        profileScore,
        visualScore,
        engagementScore,
        activityScore,
        issues: { critical: Math.max(critical, 0), warning: Math.max(warning, 0), passed: Math.max(passed, 0) },
        metrics: {
          hasName: mockData.hasName,
          hasAddress: mockData.hasAddress,
          hasPhone: mockData.hasPhone,
          hasWebsite: mockData.hasWebsite,
          hasHours: mockData.hasHours,
          hasCategory: mockData.hasCategory,
          hasDescription: mockData.hasDescription,
          hasLogo: mockData.hasLogo,
          hasCoverPhoto: mockData.hasCoverPhoto,
          photosCount: mockData.photosCount,
          reviewCount: mockData.reviewCount,
          rating: mockData.rating,
          postsCount: mockData.postsCount,
          responseRate: mockData.responseRate,
          totalViews: mockData.totalViews,
          searchViews: mockData.searchViews,
          mapsViews: mockData.mapsViews,
          callClicks: mockData.callClicks,
          websiteClicks: mockData.websiteClicks,
          directionRequests: mockData.directionRequests,
        },
        email,
        whatsappNumber: fullNumber,
        timestamp: new Date().toLocaleString(),
      };

      setAuditData(processedData);
      setShowResults(true);

      setTimeout(async () => {
        displayToast("Sending text report to WhatsApp...", "success");
        const textResult = await sendWhatsAppViaBackend(fullNumber, processedData);

        if (textResult.success) {
          displayToast("Text report sent! Sending PDF...", "success");

          setTimeout(async () => {
            const pdfResult = await sendWhatsAppPDF(fullNumber, processedData);
            if (pdfResult.success) {
              displayToast("Both reports sent successfully!", "success");
            } else {
              displayToast("Text sent, but PDF delivery failed", "warning");
            }
          }, 2000);
        } else {
          displayToast("Failed to send reports to WhatsApp", "error");
        }
      }, 2000);
    } catch (error) {
      console.error(error);
      displayToast("An error occurred during the audit.", "error");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return "from-green-500 to-emerald-600";
    if (score >= 50) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-rose-600";
  };

  const getToastBgColor = () => {
    if (toastType === "success")
      return "bg-gradient-to-r from-green-500 to-emerald-600";
    if (toastType === "warning")
      return "bg-gradient-to-r from-yellow-500 to-orange-600";
    return "bg-gradient-to-r from-red-500 to-rose-600";
  };

  return (
    <div className="min-h-screen bg-white">
      {showToast && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 z-50 animate-fade-in">
          <div
            className={`flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-2xl ${getToastBgColor()} text-white max-w-md mx-auto sm:mx-0`}
          >
            <div className="flex-1">
              <p className="font-semibold text-sm sm:text-base">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Google My Business Audit
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Comprehensive GMB analysis with instant WhatsApp delivery
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-2xl text-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get Your Free GMB Audit</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <input
                type="url"
                placeholder="Google My Business URL or Place ID"
                value={businessUrl}
                onChange={(e) => setBusinessUrl(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? "Analyzing Your Business..." : "Request Free Audit"}
              </button>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">
              Report sent to WhatsApp in text and PDF format
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && auditData && (
        <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-6xl mx-auto">
            {/* Overall Score */}
            <div className="text-center mb-8 sm:mb-12">
              <div
                className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br ${getScoreBgColor(
                  auditData.overallScore
                )} flex items-center justify-center shadow-2xl mb-4 sm:mb-6`}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center">
                  <span
                    className={`text-4xl sm:text-5xl font-bold ${getScoreColor(
                      auditData.overallScore
                    )}`}
                  >
                    {auditData.overallScore}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Overall GMB Score
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2 px-4 break-all">
                {auditData.businessName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {auditData.timestamp}
              </p>
            </div>

            {/* Category Scores */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="text-teal-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Profile</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.profileScore)}`}>
                  {auditData.profileScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Image className="text-cyan-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Visual</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.visualScore)}`}>
                  {auditData.visualScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Star className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Engagement</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.engagementScore)}`}>
                  {auditData.engagementScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="text-purple-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Activity</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.activityScore)}`}>
                  {auditData.activityScore}
                </p>
              </div>
            </div>

            {/* Profile Completeness */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Profile Completeness</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasName ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasName ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Business Name</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasAddress ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasAddress ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Address</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasPhone ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasPhone ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Phone Number</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasWebsite ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasWebsite ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Website</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasHours ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasHours ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Business Hours</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasCategory ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasCategory ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Category</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasDescription ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasDescription ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Description</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasLogo ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasLogo ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Logo</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg ${auditData.metrics.hasCoverPhoto ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasCoverPhoto ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Cover Photo</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="border-l-4 border-teal-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Total Photos</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.photosCount}</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Total Reviews</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.reviewCount}</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Average Rating</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.rating.toFixed(1)} ⭐</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Recent Posts</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.postsCount}</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Response Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.responseRate}%</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Total Views</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.totalViews}</p>
                </div>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Customer Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg">
                  <Users className="text-teal-500" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Search Views</p>
                    <p className="text-2xl font-bold text-gray-800">{auditData.metrics.searchViews}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                  <MapPin className="text-cyan-500" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Maps Views</p>
                    <p className="text-2xl font-bold text-gray-800">{auditData.metrics.mapsViews}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Phone className="text-blue-500" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Call Clicks</p>
                    <p className="text-2xl font-bold text-gray-800">{auditData.metrics.callClicks}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <MapPin className="text-purple-500" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Directions</p>
                    <p className="text-2xl font-bold text-gray-800">{auditData.metrics.directionRequests}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Issues Summary */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Issues Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 p-4 bg-red-50 rounded-lg">
                  <XCircle className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-red-600">{auditData.issues.critical}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Critical Issues</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-4 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="text-yellow-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-yellow-600">{auditData.issues.warning}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Warnings</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">{auditData.issues.passed}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Passed Audits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <button
                onClick={() => downloadPDFReport(auditData)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <Download size={20} />
                Download PDF Report
              </button>
              <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base px-4">
                ✓ Reports sent to your WhatsApp (Text & PDF)
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GMBAuditWebsite;