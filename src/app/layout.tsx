import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import SiteBackground from "@/components/SiteBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thanakorn Jamnongprakhon | Portfolio",
  description: "Portfolio of Thanakorn Jamnongprakhon (ธนกร จำนงประโคน)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        <SiteBackground />
        <Navbar />
        {children}
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
