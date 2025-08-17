import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/home/Footer";
import StoreProvider from "@/StoreProvider/StoreProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ecommerce | Next.js",
  description: "A Modern ecommerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.variable} antialiased`}>
            <Nav />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
