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
  title: "Satya | Premium Portfolio",
  description: "AI Engineer, Cybersecurity Analyst, and Full Stack Developer.",
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
      <body className="min-h-screen bg-[#fafcff] text-foreground flex flex-col font-sans overflow-x-hidden selection:bg-purple-100">
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-300/20 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: "12s" }} />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-300/20 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: "15s", animationDelay: "2s" }} />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-pink-300/20 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: "18s", animationDelay: "5s" }} />
        </div>
        {children}
      </body>
    </html>
  );
}
