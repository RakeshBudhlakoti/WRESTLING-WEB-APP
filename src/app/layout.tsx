import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoToTop from "@/components/GoToTop";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NLA - Sports Stories & Profiles",
  description: "Discover inspiring stories from athletes around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} min-h-screen flex flex-col bg-background antialiased text-foreground`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
