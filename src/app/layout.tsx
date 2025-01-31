import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = 'China Market';
const description = "China Market Wan Jia Long";

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | ' + title,
  },
  description: description,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: 'https://chinamarket.fr/logo.svg',
        alt: title,
      },
    ],
    type: 'website',
    url: 'https://chinamarket.fr',
    siteName: title,
  },
  creator: 'Zhi-Sheng Trieu',
  keywords: ['China market', 'Wan Jia Long', 'Nancy', 'Epicerie', 'Familiale'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
