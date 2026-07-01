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
  "Bill Yang — AI & Data Professional at Deloitte. Data scientist and software engineer building machine-learning systems, analytics, and full-stack products, with a quant's eye for measurable edge.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://billyang.site"
  ),
  title: {
    default: `${profile.name} — AI & Data · Software · Quant`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Bill Yang",
    "AI & Data Professional",
    "Deloitte",
    "Data Scientist",
    "Software Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Sydney",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — AI & Data · Software · Quant`,
    description,
    type: "website",
    locale: "en_AU",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI & Data · Software · Quant`,
    description,
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
