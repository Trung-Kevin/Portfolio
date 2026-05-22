import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Đặng Nguyễn Trung Kiên",
  description:
    "Portfolio cá nhân của Đặng Nguyễn Trung Kiên - Web Developer & Designer",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "web",
    "Đặng Nguyễn Trung Kiên",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-primary text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
