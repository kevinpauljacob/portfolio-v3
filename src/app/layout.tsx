import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/Loading";

export const metadata: Metadata = {
  title: "Kevin Paul Jacob | Developer Portfolio",
  description:
    "I view software development as craftsmanship, combining precision and creativity to build thoughtful and seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-comfortaa bg-[#1A1A1A] text-white w-full h-screen relative">
        <LoadingScreen />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
