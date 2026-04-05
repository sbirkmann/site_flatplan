import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flatplan.de'),
  title: "flatplan.de | 3D Wohnungsfinder & Digitales Immobilienmarketing",
  description: "Entdecken Sie den interaktiven 3D Wohnungsfinder für Ihr Neubauprojekt. Optimiert für Bauträger und Vermarkter.",
  verification: {
    google: "bpJ2DiIH1PxIhuL_ZejfuBQMhhCfFQlal6QK9UD2ZQw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
