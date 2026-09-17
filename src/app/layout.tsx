import type { Metadata } from "next";
import { Gruppo, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const stretchPro = localFont({
  src: "./fonts/StretchPro.otf",
  variable: "--font-stretch-pro",
});

const gruppo = Gruppo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gruppo",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RUN2 STUDIO | RUN WITH IT.",
  description: "Product design for ideas that need to MOVE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${stretchPro.variable} ${gruppo.variable} ${manrope.variable}`}>
      <body className="antialiased selection:bg-brand-blue selection:text-brand-light">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
