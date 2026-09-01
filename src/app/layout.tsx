import "../styles/main.scss";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import ScrollProgress from "../components/layout/ScrollProgress";

// Self-hosted at build time by next/font, so no runtime request to Google.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Marisha Deroubaix — Full Stack Developer",
  description:
    "Full stack developer in Lisbon. I build accessible, fast websites end to end, currently building platforms for parents and clinicians at Possums.",
  openGraph: {
    title: "Marisha Deroubaix — Full Stack Developer",
    description:
      "Full stack developer in Lisbon. I build accessible, fast websites end to end.",
    type: "website",
  },
};

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
