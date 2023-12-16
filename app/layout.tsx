import type { Metadata } from "next";
import { Montserrat, Anton } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Code Prashant",
  description: "Portfolio of Prashant Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NAVBAR />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
