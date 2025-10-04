"use client";

import React, { useState } from "react";
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

  // ✅ Use NEXT_PUBLIC_ to expose API key to client
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PAGESPEED_API_KEY;

  const displayToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  // Fetch PageSpeed data
  const fetchPageSpeedData = async (testUrl, strategy) => {
    if (!GOOGLE_API_KEY) {
      console.error("❌ Google API Key is missing!");
      displayToast("Google API key not configured", "error");
      return null;
    }

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      testUrl
    )}&strategy=${strategy}&key=${GOOGLE_API_KEY}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch PageSpeed data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching PageSpeed data:", error);
      displayToast("Failed to fetch audit data. Check URL/API key.", "error");
      return null;
    }
  };

  const sendWhatsAppViaBackend = async (phoneNumber, reportData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/send-whatsapp-report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, reportData }),
        }
      );

      if (!response.ok) {
        const errText = await response.text(); // backend error message
        console.error("Backend returned error:", errText);
        return { success: false, error: errText };
      }

      return await response.json();
    } catch (error) {
      console.error("Backend API Error:", error);
      return { success: false, error: error.message };
    }
  };
const downloadPDFReport = async (reportData) => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/download-pdf-report",
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
    link.setAttribute("download", "SEO_Report.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error("PDF download failed:", err);
  }
};


  // Handle submit
  const handleSubmit = async () => {
    if (!url || !email || !whatsappNumber) {
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
      const [mobileData, desktopData] = await Promise.all([
        fetchPageSpeedData(url, "mobile"),
        fetchPageSpeedData(url, "desktop"),
      ]);

      if (!mobileData || !desktopData) return;

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

      // Metrics
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
          if (audit.score < 0.5) critical++;
          else if (audit.score < 0.9) warning++;
          else passed++;
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

      setTimeout(async () => {
        displayToast("Sending report to your WhatsApp...", "success");
        const result = await sendWhatsAppViaBackend(fullNumber, processedData);
        if (result.success)
          displayToast("Report sent successfully!", "success");
        else
          displayToast(
            "Report generated but WhatsApp delivery failed.",
            "warning"
          );
      }, 2000);
    } catch (error) {
      console.error(error);
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
            <h3 className="text-2xl font-bold mb-4">Get Your Free SEO Audit</h3>
            <div className="space-y-4">
              <input
                type="url"
                placeholder="Enter your website URL"
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
                disabled={loading}
                className="w-full bg-white text-teal-600 font-semibold py-3 rounded-lg hover:bg-cyan-50 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing Your Website..." : "Request Free Audit"}
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Report sent to WhatsApp shortly after generation
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && auditData && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto text-center">
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
            <p className="text-gray-600 mb-6">
              Analysis complete for {auditData.url}
            </p>
            <p className="text-sm text-green-600 font-semibold">
              Report sent to your WhatsApp shortly
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SEOAuditWebsite;
