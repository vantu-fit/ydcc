import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app/main-header";
import Footer from "@/components/app/main-footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberEye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
          <div className="pt-20 max-w-[1270px] mx-auto">
            {children}
          </div>
          <Footer />
        </>
      </body>
    </html>
  );
}
