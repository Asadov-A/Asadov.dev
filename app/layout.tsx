import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asadbek Asadov | Full-Stack Developer Portfolio",
  description: "Asadbek Asadov's Portfolio - 14-year-old Full-Stack Developer from Uzbekistan specializing in Next.js, React, TypeScript, Node.js, NestJS, and Unity game development. Always building, always iterating.",
  keywords: ["Asadbek Asadov", "Asadov portfolio", "14 year old developer", "Full-Stack Developer", "Next.js", "NestJS", "TypeScript", "Uzbekistan Developer", "Unity GameDev"],
  authors: [{ name: "Asadbek Asadov" }],
  openGraph: {
    title: "Asadbek Asadov | Full-Stack Developer",
    description: "14-year-old full-stack developer from Uzbekistan. Building fast, clean, and purposeful applications.",
    type: "website",
    locale: "en_US",
  }
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

