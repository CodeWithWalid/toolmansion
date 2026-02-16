import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PWAInstallPrompt } from "@/components/pwa/PWAInstallPrompt";
import { FileProvider } from "@/context/FileContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://toolmansion.com"),
  title: {
    default: "ToolMansion | 100% Private Browser-Based Image & PDF Tools",
    template: "%s | ToolMansion",
  },
  description:
    "Free online tools that work entirely in your browser. Convert images, manage PDFs, format code — no uploads, complete privacy. 29+ tools available.",
  keywords: [
    "toolmansion",
    "online tools",
    "browser tools",
    "offline tools",
    "privacy focused",
    "image converter",
    "image resizer",
    "pdf merger",
    "json formatter",
    "no upload",
    "private",
    "secure",
  ],
  authors: [{ name: "ToolMansion" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ToolMansion",
  },
  openGraph: {
    title: "ToolMansion | 100% Private Browser-Based Tools",
    description:
      "Free online tools that work entirely in your browser. Convert images, manage PDFs, format code — no uploads, complete privacy.",
    type: "website",
    locale: "en_US",
    siteName: "ToolMansion",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolMansion | 100% Private Browser-Based Tools",
    description: "Free online tools that work entirely in your browser. No uploads, complete privacy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
               (function() {
                 const theme = localStorage.getItem('theme');
                 if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                   document.documentElement.classList.add('dark');
                 }
               })();
             `,
          }}
        />
        <ThemeProvider>
          <FileProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <PWAInstallPrompt />
          </FileProvider>
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8948444009622334"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

