import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import BottomNav from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrokerBoard",
  description: "A CRM for real estate brokers in India",
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-16`}>
        <Providers>{children}</Providers>
        <BottomNav />
      </body>
    </html>
  );
} 