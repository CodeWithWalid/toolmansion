import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
    default: "ToolMansion - Free Browser-Based Tools (Offline Capable)",
    template: "%s | ToolMansion",
  },
  description:
    "ToolMansion: Free online tools that run entirely in your browser. Convert specific files, resize images, and more with complete privacy. No uploads, works offline.",
  keywords: [
    "toolmansion",
    "online tools",
    "browser tools",
    "image converter",
    "image resizer",
    "offline tools",
    "privacy focused",
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
    title: "ToolMansion - Free Browser-Based Tools",
    description:
      "Free online tools that run entirely in your browser. No uploads, complete privacy.",
    type: "website",
    locale: "en_US",
    siteName: "ToolMansion",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <FileProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <PWAInstallPrompt />
          </FileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

