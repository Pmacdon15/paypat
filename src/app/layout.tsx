import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayPat.ca",
  description: "An easy way for me to accept payments.",
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
        <div
          className="flex flex-col items-center justify-items-center w-full max-h-svh font-[family-name:var(--font-geist-sans)] bg-cover bg-center"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BLOB_URL})`,
          }}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
