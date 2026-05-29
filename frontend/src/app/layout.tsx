import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getGlobalSetting } from "@/lib/global-settings";

export const metadata: Metadata = {
  title: "CareerXel | AI Career & Recruitment Platform",
  description:
    "CareerXel is a career and recruitment platform for candidates, employers, and colleges.",
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
