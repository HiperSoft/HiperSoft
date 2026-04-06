import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HiperSoft",
  description: "Terminal Excellence para el futuro corporativo. Secure your business logic with hi-fidelity infrastructure.",
  metadataBase: new URL("https://hipersoft.com.mx"),
  openGraph: {
    title: "HiperSoft",
    description: "Terminal Excellence para el futuro corporativo.",
    url: "https://hipersoft.com.mx",
    siteName: "HiperSoft",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiperSoft",
    description: "Terminal Excellence para el futuro corporativo.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://hipersoft.com.mx",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HiperSoft",
  url: "https://hipersoft.com.mx",
  logo: "https://hipersoft.com.mx/logo.png",
  description: "Terminal Excellence para el futuro corporativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#131313" />
      </head>
      <body className="antialiased min-h-screen bg-[#131313] text-[#e2e2e2] selection:bg-[#39FF14] selection:text-[#000000] font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
