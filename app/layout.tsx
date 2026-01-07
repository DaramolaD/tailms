import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TAILMS - Every Child Deserves a Second Chance",
    template: "%s | TAILMS",
  },
  description: "TAILMS is an NGO dedicated to giving every child a second chance. We provide support, resources, and opportunities for children in need.",
  keywords: ["NGO", "children", "charity", "child welfare", "non-profit", "TAILMS", "second chance", "child support"],
  authors: [{ name: "TAILMS" }],
  creator: "TAILMS",
  publisher: "TAILMS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tailms.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TAILMS",
    title: "TAILMS - Every Child Deserves a Second Chance",
    description: "TAILMS is an NGO dedicated to giving every child a second chance. We provide support, resources, and opportunities for children in need.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAILMS - Every Child Deserves a Second Chance",
    description: "TAILMS is an NGO dedicated to giving every child a second chance. We provide support, resources, and opportunities for children in need.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
