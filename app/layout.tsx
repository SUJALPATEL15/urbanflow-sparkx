import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Shell } from "@/components/Shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrbanFlow - Smart City Dashboard",
  description: "Real-time smart city monitoring and management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "antialiased min-h-screen bg-mint-white text-deep-teal font-sans border-t-8 border-deep-forest"
        )}
      >
        <Shell>
          {children}
        </Shell>
      </body>
    </html>
  );
}
