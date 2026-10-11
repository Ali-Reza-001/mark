import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marktravel.af";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mark Travel & Tours | Excellence in Every Journey",
    template: "%s | Mark Travel",
  },
  description:
    "Flights, visas, hotels, insurance, Umrah, tours and corporate travel from Kabul. Official GSA of Air Arabia.",
  openGraph: { siteName: "Mark Travel & Tours", type: "website" },
};
export const viewport: Viewport = { themeColor: "#1a0508" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=Manrope:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
