import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { AnalyticsScripts } from "@/components/analytics-scripts";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vizatly | Vize başvurunu 10 dakikada tamamla",
  description:
    "Vizatly ile dinamik formlar, akıllı evrak kontrolü ve randevu uygunluk takibi sayesinde vize sürecini tek panelden yönet.",
  metadataBase: new URL("https://visataly.com"),
  openGraph: {
    title: "Vizatly",
    description:
      "Dinamik formlar ve randevu takip otomasyonuyla uçtan uca vize danışmanlığı.",
    url: "https://visataly.com",
    siteName: "Vizatly",
    locale: "tr_TR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white", inter.variable)}>
        <Providers>
          <AnalyticsScripts />
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
