import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  "Bill Yang — Data Science & Software at UNSW. Quantitative developer and software engineer building trading systems, machine-learning pipelines, and full-stack products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://specifxx.github.io/website"),
  title: {
    default: `${profile.name} — Data Science · Software · Quant`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Bill Yang",
    "Data Scientist",
    "Quantitative Developer",
    "Software Engineer",
    "Machine Learning",
    "UNSW",
    "Sydney",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — Data Science · Software · Quant`,
    description,
    type: "website",
    locale: "en_AU",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Data Science · Software · Quant`,
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
      </body>
    </html>
  );
}
