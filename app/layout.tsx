import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navigation/Navbar";
import Footer from '@/components/common/navigation/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Andaman - Explore the Beauty",
  description: "Your ultimate guide to Andaman's resorts, events, jobs, and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
