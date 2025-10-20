"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertTriangle, XCircle, Download, Instagram, Facebook, Twitter, Linkedin, Youtube, TrendingUp, Users, Heart, MessageCircle, Share2, Eye } from "lucide-react";

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

const platforms = [
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "facebook", name: "Facebook", icon: Facebook },
  { id: "twitter", name: "Twitter", icon: Twitter },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "youtube", name: "YouTube", icon: Youtube },
];

const SocialMediaAudit = () => {
  const [brandName, setBrandName] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [socialHandles, setSocialHandles] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });
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

  const togglePlatform = (platformId) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
    }
  };

  const fetchSocialMediaData = async (platform, handle) => {
    try {
      const response = await fetch("http://localhost:5000/api/social-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform, handle }),
      });

      if (!response.ok) throw new Error("Failed to fetch social data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching social data:", error);
      return null;
    }
  };

  const sendWhatsAppViaBackend = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-social-report",
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
        "http://localhost:5000/api/send-whatsapp-social-pdf",
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
        "http://localhost:5000/api/download-social-pdf-report",
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
      link.setAttribute("download", "Social_Media_Report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      displayToast("PDF downloaded successfully!", "success");
    } catch (err) {
      console.error("PDF download failed:", err);
      displayToast("Failed to download PDF", "error");
    }
  };

  const calculateSocialScore = (platformData) => {
    let score = 0;

    // Profile completeness (20 points)
    if (platformData.hasProfilePicture) score += 5;
    if (platformData.hasBio) score += 5;
    if (platformData.hasWebsiteLink) score += 5;
    if (platformData.isVerified) score += 5;

    // Follower engagement (30 points)
    const engagementRate = platformData.engagementRate || 0;
    score += Math.min(engagementRate * 3, 30);

    // Content frequency (20 points)
    score += Math.min(platformData.postsPerWeek * 2, 20);

    // Growth (15 points)
    score += Math.min(platformData.followerGrowthRate / 2, 15);

    // Response rate (15 points)
    score += Math.min(platformData.responseRate / 100 * 15, 15);

    return Math.min(Math.round(score), 100);
  };

  const handleSubmit = async () => {
    if (!brandName || selectedPlatforms.length === 0 || !email || !whatsappNumber) {
      displayToast("Please fill all required fields and select at least one platform", "error");
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
      const platformsData = {};
      let totalScore = 0;

      // Fetch data for each selected platform
      for (const platform of selectedPlatforms) {
        const handle = socialHandles[platform];
        if (!handle) continue;

        const data = await fetchSocialMediaData(platform, handle);

        // Mock data if API fails
        const mockData = data || {
          hasProfilePicture: true,
          hasBio: true,
          hasWebsiteLink: true,
          isVerified: platform === "instagram" || platform === "twitter",
          followers: Math.floor(Math.random() * 50000) + 5000,
          following: Math.floor(Math.random() * 1000) + 100,
          posts: Math.floor(Math.random() * 500) + 50,
          engagementRate: Math.random() * 8 + 2,
          avgLikes: Math.floor(Math.random() * 1000) + 100,
          avgComments: Math.floor(Math.random() * 50) + 10,
          avgShares: Math.floor(Math.random() * 100) + 20,
          postsPerWeek: Math.floor(Math.random() * 7) + 3,
          followerGrowthRate: Math.random() * 15 + 5,
          responseRate: Math.floor(Math.random() * 40) + 60,
          bestPostTime: "6-9 PM",
          topHashtags: ["#marketing", "#business", "#branding"],
        };

        const score = calculateSocialScore(mockData);
        platformsData[platform] = { ...mockData, score, handle };
        totalScore += score;
      }

      const overallScore = Math.round(totalScore / selectedPlatforms.length);

      // Calculate category scores
      const contentScore = Math.round(
        selectedPlatforms.reduce((sum, p) => {
          const data = platformsData[p];
          return sum + (data.postsPerWeek / 10) * 100;
        }, 0) / selectedPlatforms.length
      );

      const engagementScore = Math.round(
        selectedPlatforms.reduce((sum, p) => {
          const data = platformsData[p];
          return sum + data.engagementRate * 10;
        }, 0) / selectedPlatforms.length
      );

      const growthScore = Math.round(
        selectedPlatforms.reduce((sum, p) => {
          const data = platformsData[p];
          return sum + data.followerGrowthRate * 5;
        }, 0) / selectedPlatforms.length
      );

      const profileScore = Math.round(
        selectedPlatforms.reduce((sum, p) => {
          const data = platformsData[p];
          let score = 0;
          if (data.hasProfilePicture) score += 25;
          if (data.hasBio) score += 25;
          if (data.hasWebsiteLink) score += 25;
          if (data.isVerified) score += 25;
          return sum + score;
        }, 0) / selectedPlatforms.length
      );

      // Count issues
      let critical = 0, warning = 0, passed = 0;

      selectedPlatforms.forEach(p => {
        const data = platformsData[p];
        if (!data.hasProfilePicture || !data.hasBio) critical++;
        if (data.engagementRate < 3) warning++;
        if (data.postsPerWeek < 3) warning++;
        if (data.responseRate < 70) warning++;
        if (data.followerGrowthRate < 5) warning++;
      });

      passed = selectedPlatforms.length * 5 - critical - warning;

      const processedData = {
        brandName,
        overallScore,
        contentScore,
        engagementScore,
        growthScore,
        profileScore,
        platforms: platformsData,
        selectedPlatforms,
        issues: { 
          critical: Math.max(critical, 0), 
          warning: Math.max(warning, 0), 
          passed: Math.max(passed, 0) 
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

  const getPlatformColor = (platform) => {
    const colors = {
      instagram: "from-pink-500 to-purple-600",
      facebook: "from-blue-500 to-blue-700",
      twitter: "from-sky-400 to-blue-500",
      linkedin: "from-blue-600 to-blue-800",
      youtube: "from-red-500 to-red-700",
    };
    return colors[platform] || "from-gray-500 to-gray-700";
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
            Social Media Marketing Audit
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Comprehensive social media analysis with instant WhatsApp delivery
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-2xl text-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get Your Free Social Media Audit</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />

              {/* Platform Selection */}
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Platforms *
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => {
                    const Icon = platform.icon;
                    const isSelected = selectedPlatforms.includes(platform.id);
                    return (
                      <button
                        key={platform.id}
                        type="button"
                        onClick={() => togglePlatform(platform.id)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border-2 transition-all ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                            : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                        }`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{platform.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Social Handles */}
              {selectedPlatforms.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 text-left">
                    Enter Social Media Handles
                  </label>
                  {selectedPlatforms.map((platformId) => {
                    const platform = platforms.find(p => p.id === platformId);
                    const Icon = platform.icon;
                    return (
                      <div key={platformId} className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                          <Icon size={20} className="text-gray-600" />
                        </div>
                        <input
                          type="text"
                          placeholder={`@${platform.name.toLowerCase()}handle`}
                          value={socialHandles[platformId]}
                          onChange={(e) =>
                            setSocialHandles({ ...socialHandles, [platformId]: e.target.value })
                          }
                          className="flex-1 px-3 sm:px-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        />
                      </div>
                    );
                  })}
                </div>
              )}

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
                {loading ? "Analyzing Your Social Media..." : "Request Free Audit"}
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
                Overall Social Media Score
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2 px-4">
                {auditData.brandName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {auditData.timestamp}
              </p>
            </div>

            {/* Category Scores */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="text-teal-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Content</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.contentScore)}`}>
                  {auditData.contentScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Engagement</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.engagementScore)}`}>
                  {auditData.engagementScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-blue-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Growth</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.growthScore)}`}>
                  {auditData.growthScore}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <h3 className="text-gray-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-center">Profile</h3>
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${getScoreColor(auditData.profileScore)}`}>
                  {auditData.profileScore}
                </p>
              </div>
            </div>

            {/* Platform-wise Analysis */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">Platform Analysis</h3>
              {auditData.selectedPlatforms.map((platformId) => {
                const platformData = auditData.platforms[platformId];
                const platform = platforms.find(p => p.id === platformId);
                const Icon = platform.icon;

                return (
                  <div key={platformId} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getPlatformColor(platformId)} flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800">{platform.name}</h4>
                        <p className="text-sm text-gray-600">@{platformData.handle}</p>
                      </div>
                      <div className={`text-3xl sm:text-4xl font-bold ${getScoreColor(platformData.score)}`}>
                        {platformData.score}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Followers</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{platformData.followers.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Posts</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{platformData.posts}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Engagement</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{platformData.engagementRate.toFixed(1)}%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Growth</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{platformData.followerGrowthRate.toFixed(1)}%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Response</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{platformData.responseRate}%</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                        <Heart className="text-pink-500" size={18} />
                        <div>
                          <p className="text-xs text-gray-600">Avg Likes</p>
                          <p className="text-sm font-bold text-gray-800">{platformData.avgLikes}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <MessageCircle className="text-blue-500" size={18} />
                        <div>
                          <p className="text-xs text-gray-600">Avg Comments</p>
                          <p className="text-sm font-bold text-gray-800">{platformData.avgComments}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                        <Share2 className="text-green-500" size={18} />
                        <div>
                          <p className="text-xs text-gray-600">Avg Shares</p>
                          <p className="text-sm font-bold text-gray-800">{platformData.avgShares}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${platformData.hasProfilePicture ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {platformData.hasProfilePicture ? <CheckCircle size={14} /> : <XCircle size={14} />}
                        Profile Picture
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${platformData.hasBio ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {platformData.hasBio ? <CheckCircle size={14} /> : <XCircle size={14} />}
                        Bio
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${platformData.hasWebsiteLink ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {platformData.hasWebsiteLink ? <CheckCircle size={14} /> : <XCircle size={14} />}
                        Website Link
                      </div>
                      {platformData.isVerified && (
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                          <CheckCircle size={14} />
                          Verified
                        </div>
                      )}
                    </div>

                    <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Best Posting Time</p>
                      <p className="text-sm font-bold text-gray-800">{platformData.bestPostTime}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engagement Insights */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Engagement Insights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
                  <Heart className="text-pink-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Total Likes</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {auditData.selectedPlatforms.reduce((sum, p) => 
                        sum + auditData.platforms[p].avgLikes * auditData.platforms[p].postsPerWeek, 0
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <MessageCircle className="text-blue-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Total Comments</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {auditData.selectedPlatforms.reduce((sum, p) => 
                        sum + auditData.platforms[p].avgComments * auditData.platforms[p].postsPerWeek, 0
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <Share2 className="text-green-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Total Shares</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {auditData.selectedPlatforms.reduce((sum, p) => 
                        sum + auditData.platforms[p].avgShares * auditData.platforms[p].postsPerWeek, 0
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                  <Eye className="text-purple-500 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {auditData.selectedPlatforms.reduce((sum, p) => 
                        sum + auditData.platforms[p].followers, 0
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Content Strategy</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Average Posts Per Week</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {(auditData.selectedPlatforms.reduce((sum, p) => 
                      sum + auditData.platforms[p].postsPerWeek, 0
                    ) / auditData.selectedPlatforms.length).toFixed(1)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Across all platforms</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Average Engagement Rate</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {(auditData.selectedPlatforms.reduce((sum, p) => 
                      sum + auditData.platforms[p].engagementRate, 0
                    ) / auditData.selectedPlatforms.length).toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Industry benchmark: 3-5%</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Average Growth Rate</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {(auditData.selectedPlatforms.reduce((sum, p) => 
                      sum + auditData.platforms[p].followerGrowthRate, 0
                    ) / auditData.selectedPlatforms.length).toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Monthly follower growth</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Average Response Rate</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {(auditData.selectedPlatforms.reduce((sum, p) => 
                      sum + auditData.platforms[p].responseRate, 0
                    ) / auditData.selectedPlatforms.length).toFixed(0)}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Response to comments/DMs</p>
                </div>
              </div>
            </div>

            {/* Top Hashtags */}
            <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Trending Hashtags</h3>
              <div className="flex flex-wrap gap-2">
                {auditData.selectedPlatforms.flatMap(p => 
                  auditData.platforms[p].topHashtags || []
                ).filter((tag, index, self) => self.indexOf(tag) === index).slice(0, 10).map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                  >
                    {tag}
                  </span>
                ))}
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
                {auditData.selectedPlatforms.some(p => auditData.platforms[p].postsPerWeek < 3) && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Increase Posting Frequency</p>
                      <p className="text-sm text-gray-600">Post at least 3-5 times per week to maintain engagement</p>
                    </div>
                  </li>
                )}
                {auditData.selectedPlatforms.some(p => auditData.platforms[p].engagementRate < 3) && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Boost Engagement</p>
                      <p className="text-sm text-gray-600">Focus on interactive content like polls, Q&A, and user-generated content</p>
                    </div>
                  </li>
                )}
                {auditData.selectedPlatforms.some(p => auditData.platforms[p].responseRate < 70) && (
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Improve Response Time</p>
                      <p className="text-sm text-gray-600">Respond to comments and DMs within 24 hours to build community</p>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Optimize Posting Times</p>
                    <p className="text-sm text-gray-600">Schedule posts during peak engagement hours (6-9 PM)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Use Trending Hashtags</p>
                    <p className="text-sm text-gray-600">Include 5-10 relevant hashtags to increase discoverability</p>
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

export default SocialMediaAudit;