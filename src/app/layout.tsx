import "../styles/main.scss";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CirclePointer from "../components/layout/CirclePointer";

export const metadata: Metadata = {
  title: "Marisha Deroubaix | Full-Stack Developer Portfolio",
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
