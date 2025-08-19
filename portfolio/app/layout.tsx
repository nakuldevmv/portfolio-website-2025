import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { ThemeProvider } from "@/app/modules/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LenisProvider from "./modules/helperFunction/smoothScroll/scroll";


const degular = localFont({
  src: './fonts/DegularVariable.woff2',
  display: 'swap',
  variable: '--font-degular',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "Nakul Dev",
  description: "Hey, Nakul here!",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${degular.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <LenisProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </LenisProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
