import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getGlobalSetting } from "@/lib/global-settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerXel | AI Career & Recruitment Platform",
  description:
    "CareerXel is an AI-native career and recruitment platform for candidates, employers, and colleges.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSetting = await getGlobalSetting();

  return (
    <html lang="en">
      <body>
        <Navbar globalSetting={globalSetting} />
        {children}
        <Footer globalSetting={globalSetting} />
      </body>
    </html>
  );
}
