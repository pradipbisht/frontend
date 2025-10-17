import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientProviders from "@/components/client-providers";
import { Toaster } from "sonner";
import Navbar from "./ux/navbar/navbar";
import Footer from "./ux/footer";
// import Footer from "@/components/ux/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans bg-background min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientProviders>
            <Toaster richColors position="top-center" />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
