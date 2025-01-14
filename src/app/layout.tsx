import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalProvider } from '@/Contexts';
import { NavBar } from '@/components/patterns/NavBar';
import { FooterGlobal } from '@/components/patterns/FooterGlobal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AMHP - Associação de Médicos de Hospitais Privados',
  description: 'Associação de Médicos de Hospitais Privados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <GlobalProvider>
            <NavBar />
            <main className="flex-grow">{children}</main>
          </GlobalProvider>
          <FooterGlobal />
        </div>
      </body>
    </html>
  );
}
