import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  title: 'Palmer® - Minimal Portfolio & Agency',
  description: 'Palmer, a minimal portfolio framer template, is a perfect fit for personal portfolios, designers, freelancers, agencies, and photographers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bebas.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
