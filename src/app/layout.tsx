import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Bill Yang — AI & Data Professional at Deloitte, ensuring delivery of complex data & AI programs for financial-services, insurance, and energy clients. Manages stakeholders from C-suite to engineers, with the technical fluency to lead data engineering and AI initiatives credibly.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://billyang.site";
const title = `${profile.name} — AI & Data`;
const ogImageAlt = "Bill Yang — AI & Data Professional at Deloitte";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Bill Yang",
    "Technical Business Analyst",
    "Delivery Management",
    "Stakeholder Management",
    "Project Management",
    "Deloitte",
    "Consultant",
    "Data & AI",
    "GenAI",
    "Sydney",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "en_AU",
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "643e7b36c2624405b0d3cbf5b7514872"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
