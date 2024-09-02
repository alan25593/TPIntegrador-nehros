import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const RedHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nehros - Creando Experiencias Digitales",
  description:
    "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel, conócenos!",
  keywords: "experiencias digitales, presencia online, desarrollo web, Nehros, Nehros web, Nehros desarrollo web, Nehros landing page, landing page, website, Nehros dev, consultora, consultora it",
  openGraph: {
    title: "Nehros | Creando Experiencias Digitales",
    description:
      "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel, conócenos!",
    url: "https://nehros.com",
    siteName: "Nehros",
    images: [
      {
        url: "https://nehros.com/images/banner-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Banner promocional de Nehros, creando experiencias digitales",
        type: "image/jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehros | Creando Experiencias Digitales",
    description:
      "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel, conócenos!",
    images: ["https://nehros.com/images/banner-meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#9747ff",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={RedHat.className}>{children}</body>
    </html>
  );
}
