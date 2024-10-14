import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CAPITAL.SHOP",
  description: "Start Shopping with CAPITAL.SHOP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <cartContext.Provider value={"heeee"}> */}
        <div id="portalRoot"></div>
        <NavBar />
        {children}
        <Footer />
        {/* </cartContext.Provider> */}
      </body>
    </html>
  );
}
