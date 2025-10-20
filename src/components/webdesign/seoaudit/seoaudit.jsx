"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

// Country codes
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

const SEOAuditWebsite = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [auditsRemaining, setAuditsRemaining] = useState(3);

  // Fetch audit status on mount
  useEffect(() => {
    checkAuditStatus();
  }, []);

  const checkAuditStatus = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/audit-status");
      const data = await response.json();
      if (data.success) {
        setAuditsRemaining(data.limits?.maxAuditsPerDay || 3);
      }
    } catch (error) {
      console.error("Error checking audit status:", error);
    }
  };

  const displayToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  // Fetch PageSpeed via backend with timeout
  const fetchPageSpeedData = async (testUrl, strategy) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout

    try {
      displayToast(`🔍 Analyzing ${strategy} performance...`, "success");

      const response = await fetch("http://localhost:5000/api/pagespeed/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: testUrl, strategy }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!data.success) {
        const errorMsg =
          data.message || data.details || "Failed to fetch audit data";
        throw new Error(errorMsg);
      }

      return data.data;
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Error fetching PageSpeed data:", error);

      if (error.name === "AbortError") {
        displayToast(
          "Request timeout. The audit took too long. Please try again.",
          "error"
        );
      } else {
        displayToast(
          error.message ||
            "Failed to fetch audit data. Check URL, API key, or try again.",
          "error"
        );
      }
      return null;
    }
  };

  // Send WhatsApp via backend
  const sendWhatsAppViaBackend = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumbers: [phoneNumber],
            reportData,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          displayToast(
            data.message || "Audit limit exceeded. Try again later.",
            "error"
          );
        }
        return { success: false, error: data.message };
      }

      // Update remaining audits
      if (data.auditsRemaining !== undefined) {
        setAuditsRemaining(data.auditsRemaining);
      }

      return data;
    } catch (error) {
      console.error("Backend API Error:", error);
      return { success: false, error: error.message };
    }
  };

  // Handle submit
  const handleSubmit = async () => {
    // Validate input
    if (!url || !email || !whatsappNumber) {
      displayToast("Please fill all fields", "error");
      return;
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      displayToast("Please enter a valid URL", "error");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayToast("Please enter a valid email", "error");
      return;
    }

    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    if (cleanNumber.length < 4) {
      displayToast("Please enter a valid WhatsApp number", "error");
      return;
    }

    if (auditsRemaining <= 0) {
      displayToast(
        "Audit limit exceeded (3 per 24 hours). Try again tomorrow.",
        "error"
      );
      return;
    }

    const fullNumber =
      countryCode.replace("+", "") +
      whatsappNumber.replace(/^0+/, "").replace(/\D/g, "");

    setLoading(true);
    setShowResults(false);

    try {
      // Fetch both mobile and desktop data in parallel
      const [mobileData, desktopData] = await Promise.all([
        fetchPageSpeedData(url, "mobile"),
        fetchPageSpeedData(url, "desktop"),
      ]);

      if (!mobileData || !desktopData) {
        setLoading(false);
        return;
      }

      // Calculate category scores
      const getCategoryScore = (category) =>
        Math.round(
          (((mobileData.lighthouseResult?.categories?.[category]?.score || 0) +
            (desktopData.lighthouseResult?.categories?.[category]?.score ||
              0)) /
            2) *
            100
        );

      const mobilePerformance = Math.round(
        (mobileData.lighthouseResult?.categories?.performance?.score || 0) * 100
      );
      const desktopPerformance = Math.round(
        (desktopData.lighthouseResult?.categories?.performance?.score || 0) *
          100
      );
      const seoScore = getCategoryScore("seo");
      const accessibilityScore = getCategoryScore("accessibility");
      const bestPracticesScore = getCategoryScore("best-practices");

      const overallScore = Math.round(
        0.4 * ((mobilePerformance + desktopPerformance) / 2) +
          0.2 * seoScore +
          0.2 * accessibilityScore +
          0.2 * bestPracticesScore
      );

      // Extract metrics
      const audits = mobileData.lighthouseResult?.audits || {};
      const metrics = {
        fcp: audits["first-contentful-paint"]?.numericValue / 1000 || 0,
        lcp: audits["largest-contentful-paint"]?.numericValue / 1000 || 0,
        cls: audits["cumulative-layout-shift"]?.numericValue || 0,
        tti: audits["interactive"]?.numericValue / 1000 || 0,
        tbt: audits["total-blocking-time"]?.numericValue || 0,
        speedIndex: audits["speed-index"]?.numericValue / 1000 || 0,
      };

      // Count issues
      let critical = 0,
        warning = 0,
        passed = 0;

      Object.values(audits).forEach((audit) => {
        if (audit.score !== null && audit.score !== undefined) {
          if (audit.score < 0.5) {
            critical++;
          } else if (audit.score < 0.9) {
            warning++;
          } else {
            passed++;
          }
        }
      });

      const processedData = {
        overallScore,
        performanceScore: Math.round(
          (mobilePerformance + desktopPerformance) / 2
        ),
        seoScore,
        accessibilityScore,
        bestPracticesScore,
        issues: { critical, warning, passed },
        metrics,
        mobileScore: mobilePerformance,
        desktopScore: desktopPerformance,
        url,
        email,
        whatsappNumber: fullNumber,
        timestamp: new Date().toLocaleString(),
      };

      setAuditData(processedData);
      setShowResults(true);

      // Send WhatsApp after showing results
      setTimeout(async () => {
        displayToast("Sending report to your WhatsApp...", "success");
        const result = await sendWhatsAppViaBackend(fullNumber, processedData);

        if (result.success) {
          displayToast("Report sent successfully!", "success");
        } else {
          displayToast(
            result.error || "Report generated but WhatsApp delivery failed.",
            "warning"
          );
        }
      }, 2000);
    } catch (error) {
      console.error("Audit error:", error);
      displayToast("An error occurred during the audit.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Helpers for score color
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
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div
            className={`flex items-center gap-4 px-6 py-4 rounded-lg shadow-2xl ${getToastBgColor()} text-white max-w-md`}
          >
            <div className="flex-1">
              <p className="font-semibold">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Professional SEO Audit
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Get comprehensive SEO analysis with instant WhatsApp delivery
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-2xl text-gray-700">
            <h3 className="text-2xl font-bold mb-2">Get Your Free SEO Audit</h3>
            <p className="text-sm text-gray-500 mb-4">
              Audits remaining today:{" "}
              <span className="font-bold text-teal-600">{auditsRemaining}</span>
              /3
            </p>

            <div className="space-y-4">
              <input
                type="url"
                placeholder="Enter your website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />

              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
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
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || auditsRemaining <= 0}
                className="w-full bg-white text-teal-600 font-semibold py-3 rounded-lg hover:bg-cyan-50 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Analyzing Your Website..."
                  : auditsRemaining <= 0
                  ? "Limit Reached"
                  : "Request Free Audit"}
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              📱 Report sent to WhatsApp shortly after generation
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && auditData && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            {/* Overall Score Circle */}
            <div
              className={`w-40 h-40 mx-auto rounded-full bg-gradient-to-br ${getScoreBgColor(
                auditData.overallScore
              )} flex items-center justify-center shadow-2xl mb-6`}
            >
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                <span
                  className={`text-5xl font-bold ${getScoreColor(
                    auditData.overallScore
                  )}`}
                >
                  {auditData.overallScore}
                </span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Overall SEO Score
            </h2>
            <p className="text-gray-600 mb-8">
              Analysis complete for{" "}
              <span className="font-semibold">{auditData.url}</span>
            </p>

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <p className="text-gray-600 text-sm mb-2">Performance</p>
                <p
                  className={`text-2xl font-bold ${getScoreColor(
                    auditData.performanceScore
                  )}`}
                >
                  {auditData.performanceScore}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg">
                <p className="text-gray-600 text-sm mb-2">SEO</p>
                <p
                  className={`text-2xl font-bold ${getScoreColor(
                    auditData.seoScore
                  )}`}
                >
                  {auditData.seoScore}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg">
                <p className="text-gray-600 text-sm mb-2">Accessibility</p>
                <p
                  className={`text-2xl font-bold ${getScoreColor(
                    auditData.accessibilityScore
                  )}`}
                >
                  {auditData.accessibilityScore}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg">
                <p className="text-gray-600 text-sm mb-2">Best Practices</p>
                <p
                  className={`text-2xl font-bold ${getScoreColor(
                    auditData.bestPracticesScore
                  )}`}
                >
                  {auditData.bestPracticesScore}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg">
                <p className="text-gray-600 text-sm mb-2">Mobile vs Desktop</p>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-blue-600">{auditData.mobileScore}</span>{" "}
                  /{" "}
                  <span className="text-purple-600">
                    {auditData.desktopScore}
                  </span>
                </p>
              </div>
            </div>

            {/* Issues Summary */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Issues Summary
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">
                    {auditData.issues.critical}
                  </p>
                  <p className="text-gray-600 text-sm">Critical Issues</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-600">
                    {auditData.issues.warning}
                  </p>
                  <p className="text-gray-600 text-sm">Warnings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">
                    {auditData.issues.passed}
                  </p>
                  <p className="text-gray-600 text-sm">Passed Audits</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-gray-600 text-sm">
                    First Contentful Paint
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.fcp?.toFixed(2)}s
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Largest Contentful Paint
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.lcp?.toFixed(2)}s
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Cumulative Layout Shift
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.cls?.toFixed(3)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Time to Interactive</p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.tti?.toFixed(2)}s
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Blocking Time</p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.tbt?.toFixed(0)}ms
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Speed Index</p>
                  <p className="text-xl font-bold text-gray-800">
                    {auditData.metrics.speedIndex?.toFixed(2)}s
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-green-600 font-semibold">
              ✅ Report sent to your WhatsApp successfully!
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SEOAuditWebsite;
