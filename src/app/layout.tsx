import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/Contexts";
import { NavBar } from "@/components/patterns/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMHP - Associação de Médicos de Hospitais Privados",
  description: "Associação de Médicos de Hospitais Privados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <GlobalProvider>
          <NavBar/>
          {children}
          </GlobalProvider>
      </body>
    </html>
  );
}