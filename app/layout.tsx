// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextKit Form",
  description: "Simple Next.js template for stylish waitlists and newsletters, powered by KIT API, Headless UI, and Framer Motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-4 mt-6 lg:mx-auto min-h-screen relative bg-black text-white`}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 opacity-30 blur-3xl" />
        <main className="flex-auto flex flex-col">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
