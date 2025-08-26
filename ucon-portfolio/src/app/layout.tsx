import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ucon Solutions - Technology Portfolio',
  description: 'Innovative technology solutions for logistics, healthcare, energy, and retail industries. Partner with Ucon for your digital transformation.',
  keywords: 'technology solutions, logistics, healthcare, energy, retail, digital transformation, Brazil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}