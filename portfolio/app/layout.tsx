import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Playfair_Display, Oswald } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

const oswald = Oswald({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: "Steven Aguilar",
  description: "My personal portfolio | v1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${montserrat.variable} ${playfair.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
