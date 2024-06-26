import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Lato } from 'next/font/google'
 
const lato = Lato({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Virtual Staging AI",
    description: "Created by Vu",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
