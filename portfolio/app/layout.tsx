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
  metadataBase: new URL("https://www.nakuldev.me"),
  title: {
    default: "Nakul Dev M V | Software Engineer & Creative Developer",
    template: "%s | Nakul Dev M V",
  },
  description:
    "Portfolio of Nakul Dev M V, a Software Engineer and Fullstack Developer. Explore my projects, skills, and aesthetic web experiences built with Next.js, React, and modern web tools.",
  keywords: [
    "Nakul",
    "Nakul Dev",
    "Nakul Dev M V",
    "Nakul Dev MV",
    "nakuldevmv",
    "nakuldevmv@gmail.com",
    "nakuldev m v",
    "nakul dev m v",
    "nakul devmv",
    "nakuldevm v",
    "nakul devmv",
    "nakul devm v",
    "MV Nakul Dev",
    "Software Engineer",
    "Fullstack Developer",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Creative Developer",
    "Developer Portfolio",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Nakul Dev M V", url: "https://www.nakuldev.me" }],
  creator: "Nakul Dev M V",
  publisher: "Nakul Dev M V",
  alternates: {
    canonical: "https://www.nakuldev.me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nakuldev.me",
    siteName: "Nakul Dev M V - Portfolio",
    title: "Nakul Dev M V | Software Engineer & Creative Developer",
    description:
      "Portfolio of Nakul Dev M V, a Software Engineer and Fullstack Developer. Explore my projects, skills, and aesthetic web experiences built with Next.js and React.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of Nakul Dev M V's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakul Dev M V | Software Engineer & Creative Developer",
    description:
      "Portfolio of Nakul Dev M V, a Software Engineer and Fullstack Developer building modern web experiences.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nakul Dev M V",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nakul Dev",
  "alternateName": "Nakul Dev M V",
  "url": "https://www.nakuldev.me/",
  "email": "mailto:nakuldevmv@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/nakuldevmv/",
    "https://github.com/nakuldevmv",
    "https://instagram.com/nakuled",
    "https://ieeexplore.ieee.org/document/11390111"
  ]
}
` }}
        />

      </head>
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
