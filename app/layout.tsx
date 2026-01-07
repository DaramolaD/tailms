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
    default: "TAILMS - Tech & Innovation Learning Management System | Empowering Youth Through Tech Education",
    template: "%s | TAILMS",
  },
  description: "TAILMS is a Learning Management System providing offline tech skill training to adolescents and young adults in juvenile correctional facilities. Empowering youth with coding, web development, and digital skills to give them a second chance.",
  keywords: [
    "TAILMS",
    "Learning Management System",
    "LMS",
    "tech education",
    "coding education",
    "juvenile correctional facilities",
    "youth empowerment",
    "offline learning",
    "tech skills training",
    "web development training",
    "HTML CSS JavaScript",
    "youth rehabilitation",
    "second chance",
    "NGO",
    "non-profit education",
    "digital skills",
    "coding bootcamp",
    "technical training"
  ],
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
    siteName: "TAILMS - Tech & Innovation Learning Management System",
    title: "TAILMS - Empowering Youth Through Tech Education",
    description: "Offline Learning Management System providing tech skill training to youth in juvenile correctional facilities. Teaching coding, web development, and digital skills to give every child a second chance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAILMS - Empowering Youth Through Tech Education",
    description: "Offline LMS providing tech skill training to youth in correctional facilities. Teaching coding, web development, and digital skills to give every child a second chance.",
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
