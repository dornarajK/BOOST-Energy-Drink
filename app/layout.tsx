import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BOOST",
  description: "BOOST fast energy withe no regret",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar/>
          {children}
        {/* <Footer/> */}
        <Footer/>
      </body>
    </html>
  );
}
