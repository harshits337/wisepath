import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: 'Triviabash - Daily Wisdom & Inspiration',
  description: 'Discover daily quotes and timeless wisdom from ancient philosophers. Explore stoic philosophy from Marcus Aurelius, Seneca, and Epictetus.',
  keywords: 'stoicism, quotes, philosophy, wisdom, Marcus Aurelius, Seneca, Epictetus, daily inspiration, ancient philosophy',
  openGraph: {
    title: 'Triviabash - Daily Wisdom & Inspiration',
    description: 'Daily quotes and wisdom from ancient philosophers.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XQPY6CZB7J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQPY6CZB7J');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
