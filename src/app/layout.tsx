import './globals.css'

import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className='bg-gray-600'>
        {children}
      </body>
    </html>
  );
}
