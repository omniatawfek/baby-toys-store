import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import TopBar from "./components/layout/top-bar";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Baby Toys Store",
  description: "Discover fun and educational toys for kids.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} flex min-h-screen flex-col`}>
        <TopBar />
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
