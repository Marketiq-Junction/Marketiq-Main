import React from "react";
import "./globals.css";

export const metadata = {
  title: "Marketiq | Revolutionizing Business Intelligence",
  description:
    "Discover innovative business intelligence solutions with Marketiq. Empowering businesses with technology-driven insights.",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <head>
        {/* Basic Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Marketiq, Business Intelligence, Analytics, Data-Driven Insights, Marketiq Solutions"
        />
        <meta name="author" content="Marketiq" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Marketiq | Revolutionizing Business Intelligence" />
        <meta
          property="og:description"
          content="Empowering businesses with technology-driven insights."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://marketiq.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketiq | Revolutionizing Business Intelligence" />
        <meta
          name="twitter:description"
          content="Discover innovative business intelligence solutions."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Robots and Canonical Links */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marketiq.com/" />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Marketiq",
              url: "https://marketiq.com/",
              logo: "https://marketiq.com/favicon/favicon-16x16.png",
              description:
                "Revolutionizing business intelligence with data-driven insights.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Downtown Business Hub",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1 123-456-7890",
                  contactType: "Customer Service",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/Marketiq",
                "https://twitter.com/Marketiq",
                "https://linkedin.com/company/Marketiq",
              ],
            }),
          }}
        ></script>

        {/* Favicon for all devices */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
      </head>
      <body>{children}</body>
    </html>
  );
}
