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
const description = "China Market Wan Jia Long - Votre épicerie asiatique de confiance à Nancy. Découvrez nos produits authentiques et frais pour toutes vos envies culinaires asiatiques.";

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
        <div>
          <a href="tel:+33383279759" className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center
          transition duration-300" aria-label="Appeler China Market au 03 83 27 97 59">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
