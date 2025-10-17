import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientProviders from "@/components/client-providers";
import { Toaster } from "sonner";
import Navbar from "./ux/navbar/navbar";
import Footer from "./ux/footer";
// import Footer from "@/components/ux/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeStyle Hub - Your Wellness Companion",
  description:
    "Your all-in-one wellness & lifestyle companion for health, skincare, haircare, pets, and parenting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          <ClientProviders>
            <Toaster position="top-right" />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
