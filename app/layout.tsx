import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import "./styles/globals.css";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Thamirys & Giovane | Casamento",
  description: "Convite especial para o nosso casamento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="pt-BR">
      <body className={`${serif.variable} ${script.variable} ${sans.variable} font-serif bg-white text-gray-800 antialiased`}>
      {children}
      </body>
      </html>
  );
}