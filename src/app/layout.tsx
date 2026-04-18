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
  title: "Satya's Personal Portfolio",
  description: "AI Engineer, Cybersecurity Analyst, and Full Stack Developer.",
};

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fafcff] text-slate-900 flex flex-col font-sans overflow-x-hidden w-full max-w-[100vw] selection:bg-indigo-100">

        {/* Technical Developer / Trading Grid Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          {/* Deep technical grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

          {/* Subtle architectural vertical tracking lines across the page for trading feel */}
          <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-20">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
