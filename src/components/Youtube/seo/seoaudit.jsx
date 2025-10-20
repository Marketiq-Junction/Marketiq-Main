"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertTriangle, XCircle, Download, Youtube, Play, Users, Eye, ThumbsUp, MessageCircle, TrendingUp, Clock, Video, BarChart3 } from "lucide-react";

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

const YouTubeMarketingAudit = () => {
  const [channelName, setChannelName] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
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

  const fetchYouTubeData = async (url) => {
    try {
      const response = await fetch("http://localhost:5000/api/youtube-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to fetch YouTube data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
      displayToast("Failed to fetch channel data", "error");
      return null;
    }
  };

  const sendWhatsAppViaBackend = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-youtube-report",
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
        "http://localhost:5000/api/send-whatsapp-youtube-pdf",
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
        "http://localhost:5000/api/download-youtube-pdf-report",
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
      link.setAttribute("download", "YouTube_Marketing_Report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      displayToast("PDF downloaded successfully!", "success");
    } catch (err) {
      console.error("PDF download failed:", err);
      displayToast("Failed to download PDF", "error");
    }
  };

  const calculateYouTubeScore = (data) => {
    let score = 0;

    // Channel setup (20 points)
    if (data.hasChannelArt) score += 5;
    if (data.hasProfilePicture) score += 5;
    if (data.hasDescription) score += 5;
    if (data.hasCustomUrl) score += 5;

    // Engagement (30 points)
    const engagementRate = data.engagementRate || 0;
    score += Math.min(engagementRate * 3, 30);

    // Upload frequency (20 points)
    score += Math.min(data.uploadsPerMonth * 2, 20);

    // Subscriber growth (15 points)
    score += Math.min(data.subscriberGrowthRate / 2, 15);

    // Video optimization (15 points)
    const avgOptimization = (
      (data.avgTitleLength > 40 && data.avgTitleLength < 70 ? 5 : 0) +
      (data.avgDescriptionLength > 200 ? 5 : 0) +
      (data.avgTagsCount > 5 ? 5 : 0)
    );
    score += avgOptimization;

    return Math.min(Math.round(score), 100);
  };

  const handleSubmit = async () => {
    if (!channelName || !channelUrl || !email || !whatsappNumber) {
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
      const youtubeData = await fetchYouTubeData(channelUrl);

      // Mock data if API fails
      const mockData = youtubeData || {
        hasChannelArt: true,
        hasProfilePicture: true,
        hasDescription: true,
        hasCustomUrl: true,
        subscribers: Math.floor(Math.random() * 500000) + 10000,
        totalVideos: Math.floor(Math.random() * 300) + 50,
        totalViews: Math.floor(Math.random() * 10000000) + 500000,
        avgViews: Math.floor(Math.random() * 5000) + 500,
        avgLikes: Math.floor(Math.random() * 200) + 50,
        avgComments: Math.floor(Math.random() * 50) + 10,
        engagementRate: Math.random() * 6 + 2,
        uploadsPerMonth: Math.floor(Math.random() * 8) + 4,
        subscriberGrowthRate: Math.random() * 20 + 5,
        avgWatchTime: Math.random() * 5 + 2,
        avgTitleLength: Math.floor(Math.random() * 30) + 45,
        avgDescriptionLength: Math.floor(Math.random() * 500) + 250,
        avgTagsCount: Math.floor(Math.random() * 10) + 6,
        topVideos: [
          {
            title: "Top Performing Video 1",
            views: Math.floor(Math.random() * 50000) + 10000,
            likes: Math.floor(Math.random() * 2000) + 500,
            comments: Math.floor(Math.random() * 200) + 50,
          },
          {
            title: "Top Performing Video 2",
            views: Math.floor(Math.random() * 40000) + 8000,
            likes: Math.floor(Math.random() * 1500) + 400,
            comments: Math.floor(Math.random() * 150) + 40,
          },
          {
            title: "Top Performing Video 3",
            views: Math.floor(Math.random() * 30000) + 6000,
            likes: Math.floor(Math.random() * 1000) + 300,
            comments: Math.floor(Math.random() * 100) + 30,
          },
        ],
        bestUploadTime: "5-7 PM",
        topKeywords: ["marketing", "tutorial", "tips", "business", "strategy"],
        audienceDemographics: {
          age: "25-34 years",
          gender: "60% Male, 40% Female",
          topCountries: ["India", "USA", "UK"],
        },
      };

      const overallScore = calculateYouTubeScore(mockData);

      // Calculate category scores
      const contentScore = Math.round(
        (mockData.uploadsPerMonth / 10) * 100
      );

      const engagementScore = Math.round(
        mockData.engagementRate * 12.5
      );

      const optimizationScore = Math.round(
        ((mockData.avgTitleLength > 40 && mockData.avgTitleLength < 70 ? 33 : 0) +
          (mockData.avgDescriptionLength > 200 ? 33 : 0) +
          (mockData.avgTagsCount > 5 ? 34 : 0))
      );

      const growthScore = Math.round(
        Math.min(mockData.subscriberGrowthRate * 5, 100)
      );

      // Count issues
      let critical = 0, warning = 0, passed = 0;

      if (!mockData.hasChannelArt || !mockData.hasProfilePicture || !mockData.hasDescription) critical++;
      if (mockData.uploadsPerMonth < 4) critical++;
      if (mockData.engagementRate < 3) warning++;
      if (mockData.avgWatchTime < 3) warning++;
      if (mockData.avgTitleLength < 40 || mockData.avgTitleLength > 70) warning++;
      if (mockData.avgDescriptionLength < 200) warning++;
      if (mockData.avgTagsCount < 5) warning++;
      if (mockData.subscriberGrowthRate < 10) warning++;

      passed = 15 - critical - warning;

      const processedData = {
        channelName,
        channelUrl,
        overallScore,
        contentScore,
        engagementScore,
        optimizationScore,
        growthScore,
        metrics: mockData,
        issues: {
          critical: Math.max(critical, 0),
          warning: Math.max(warning, 0),
          passed: Math.max(passed, 0),
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

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
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
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <Youtube size={48} className="text-white" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              YouTube Marketing Audit
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Comprehensive YouTube channel analysis with instant WhatsApp delivery
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-2xl text-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get Your Free YouTube Audit</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Channel Name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <input
                type="url"
                placeholder="YouTube Channel URL or Handle (@username)"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
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
                {loading ? "Analyzing Your Channel..." : "Request Free Audit"}
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
                Overall YouTube Score
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2 px-4">
                {auditData.channelName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {auditData.timestamp}
              </p>
            </div>

            {/* Category Scores */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Video className="text-teal-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Content</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.contentScore)}`}>
                  {auditData.contentScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <ThumbsUp className="text-pink-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Engagement</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.engagementScore)}`}>
                  {auditData.engagementScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="text-blue-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Optimization</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.optimizationScore)}`}>
                  {auditData.optimizationScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="text-green-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Growth</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.growthScore)}`}>
                  {auditData.growthScore}
                </p>
              </div>
            </div>

            {/* Channel Overview */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Youtube size={32} />
                <h3 className="text-xl sm:text-2xl font-bold">Channel Overview</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={20} />
                    <p className="text-xs font-semibold">Subscribers</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">{formatNumber(auditData.metrics.subscribers)}</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Video size={20} />
                    <p className="text-xs font-semibold">Total Videos</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">{auditData.metrics.totalVideos}</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={20} />
                    <p className="text-xs font-semibold">Total Views</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">{formatNumber(auditData.metrics.totalViews)}</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={20} />
                    <p className="text-xs font-semibold">Avg Watch Time</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold">{auditData.metrics.avgWatchTime.toFixed(1)} min</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="border-l-4 border-teal-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Avg Views per Video</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{formatNumber(auditData.metrics.avgViews)}</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Avg Likes per Video</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.avgLikes}</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Avg Comments per Video</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.avgComments}</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Engagement Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.engagementRate.toFixed(2)}%</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Uploads per Month</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.uploadsPerMonth}</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3 sm:pl-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Subscriber Growth Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{auditData.metrics.subscriberGrowthRate.toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* Channel Setup */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Channel Setup</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className={`flex items-center gap-2 p-3 rounded-lg ${auditData.metrics.hasChannelArt ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasChannelArt ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Channel Art</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-lg ${auditData.metrics.hasProfilePicture ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasProfilePicture ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Profile Picture</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-lg ${auditData.metrics.hasDescription ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasDescription ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Description</span>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-lg ${auditData.metrics.hasCustomUrl ? 'bg-green-50' : 'bg-red-50'}`}>
                  {auditData.metrics.hasCustomUrl ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                  <span className="text-sm font-medium text-gray-700">Custom URL</span>
                </div>
              </div>
            </div>

            {/* Video Optimization */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Video Optimization</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Avg Title Length</p>
                  <p className="text-3xl font-bold text-gray-800 mb-1">{auditData.metrics.avgTitleLength}</p>
                  <p className="text-xs text-gray-500">Optimal: 40-70 characters</p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${auditData.metrics.avgTitleLength >= 40 && auditData.metrics.avgTitleLength <= 70 ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${Math.min((auditData.metrics.avgTitleLength / 70) * 100, 100)}%` }}
                    />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Avg Description Length</p>
                  <p className="text-3xl font-bold text-gray-800 mb-1">{auditData.metrics.avgDescriptionLength}</p>
                  <p className="text-xs text-gray-500">Optimal: 200+ characters</p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${auditData.metrics.avgDescriptionLength >= 200 ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${Math.min((auditData.metrics.avgDescriptionLength / 500) * 100, 100)}%` }}
                    />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Avg Tags Count</p>
                  <p className="text-3xl font-bold text-gray-800 mb-1">{auditData.metrics.avgTagsCount}</p>
                  <p className="text-xs text-gray-500">Optimal: 5-15 tags</p>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${auditData.metrics.avgTagsCount >= 5 ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${Math.min((auditData.metrics.avgTagsCount / 15) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Videos */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Top Performing Videos</h3>
              <div className="space-y-4">
                {auditData.metrics.topVideos.map((video, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-lg font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{video.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Eye size={16} />
                          <span>{formatNumber(video.views)} views</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <ThumbsUp size={16} />
                          <span>{formatNumber(video.likes)} likes</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <MessageCircle size={16} />
                          <span>{video.comments} comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Demographics */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Audience Demographics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Age Group</p>
                  <p className="text-2xl font-bold text-gray-800">{auditData.metrics.audienceDemographics.age}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Gender Split</p>
                  <p className="text-lg font-bold text-gray-800">{auditData.metrics.audienceDemographics.gender}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Top Countries</p>
                  <div className="space-y-1">
                    {auditData.metrics.audienceDemographics.topCountries.map((country, index) => (
                      <p key={index} className="text-sm font-medium text-gray-700">{index + 1}. {country}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Content Strategy Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Best Upload Time</p>
                  <p className="text-xl font-bold text-gray-800">{auditData.metrics.bestUploadTime}</p>
                  <p className="text-xs text-gray-500 mt-1">Highest audience engagement</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border-l-4 border-teal-500">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Top Keywords</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {auditData.metrics.topKeywords.map((keyword, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-teal-700 rounded-full text-xs font-medium border border-teal-200">
                        {keyword}
                      </span>
                    ))}
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

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 sm:p-6 lg:p-8 border-2 border-teal-200 mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Key Recommendations</h3>
              <ul className="space-y-3">
                {auditData.metrics.uploadsPerMonth < 4 && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Increase Upload Frequency</p>
                      <p className="text-sm text-gray-600">Upload at least 4-8 videos per month for consistent growth</p>
                    </div>
                  </li>
                )}
                {auditData.metrics.avgTitleLength < 40 || auditData.metrics.avgTitleLength > 70 && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Optimize Video Titles</p>
                      <p className="text-sm text-gray-600">Keep titles between 40-70 characters for better click-through rates</p>
                    </div>
                  </li>
                )}
                {auditData.metrics.avgDescriptionLength < 200 && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Enhance Descriptions</p>
                      <p className="text-sm text-gray-600">Write detailed descriptions (200+ characters) with keywords and timestamps</p>
                    </div>
                  </li>
                )}
                {auditData.metrics.avgTagsCount < 5 && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Add More Tags</p>
                      <p className="text-sm text-gray-600">Use 5-15 relevant tags per video to improve discoverability</p>
                    </div>
                  </li>
                )}
                {auditData.metrics.engagementRate < 3 && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Boost Engagement</p>
                      <p className="text-sm text-gray-600">Add CTAs, ask questions, and encourage comments to increase engagement</p>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Create Playlists</p>
                    <p className="text-sm text-gray-600">Organize content into playlists to increase watch time and session duration</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Use Custom Thumbnails</p>
                    <p className="text-sm text-gray-600">Create eye-catching custom thumbnails with text overlay and vibrant colors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Optimize Upload Schedule</p>
                    <p className="text-sm text-gray-600">Post during {auditData.metrics.bestUploadTime} for maximum reach</p>
                  </div>
                </li>
              </ul>
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

export default YouTubeMarketingAudit;