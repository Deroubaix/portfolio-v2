import "../styles/main.scss";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CirclePointer from "../components/layout/CirclePointer";

export const metadata: Metadata = {
  title: "Marisha Deroubaix | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Marisha Deroubaix, a full-stack developer specializing in building modern, responsive websites.",
};

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Marisha Portfolio" />
        <meta name="author" content="Marisha Deroubaix" />
        <meta
          name="google-site-verification"
          content="HLwoV-gkypaVRCudRCBpKo5AiZdGlw53IeRihZsv4sE"
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, Portfolio, Marisha Deroubaix, Web Development, Responsive Design"
        />
        <meta
          property="og:title"
          content="Marisha Deroubaix | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Marisha Deroubaix, a full-stack developer specializing in building modern, responsive websites."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://marishaderoubaix.vercel.app/Marisha-Deroubaix.jpg"
        />
      </head>
      <body>
        <CirclePointer />
        <Header />
        <div className="content-body icon-bg_light-bg">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
