import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bestin Technologies",
  description: "Your Trusted IT Consulting Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
