import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterijeri Kankan, separe i nameštaj za ugostitelje",
  description:
    "Bavimo se dugi niz godina izradom separea i ostalog nameštaja za ugostiteljske objekte. Nase stolove, stolice, separe možete naci u brojnim lokalima u Beogradu, Srbiji a i inostranstvu!",
  icons: {
    icon: "/logo kankan.jpg",
    apple: "/logo kankan.jpg",
  },
  keywords: [
    "separe",
    "separei",
    "namestaj za ugostitelje",
    "stolovi",
    "stolovi za ugostitelje",
    "stolice",
    "stolice za ugostitelje",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
