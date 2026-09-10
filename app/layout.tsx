import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Afiq Haikal — Web Developer",
    template: "%s | Afiq Haikal",
  },
  description:
    "Web developer in Malaysia building Shopify storefronts, Framer and WordPress websites, and custom Laravel content systems. Explore selected work by Afiq Haikal.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
