import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const RedHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Lampert - Proyecto Final",
  description:
    "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel. En Nehros, te ayudamos a crear experiencias digitales únicas y efectivas.",
  keywords:
    "experiencias digitales, presencia online, desarrollo web, Nehros, Nehros web, Nehros desarrollo web, Nehros landing page, landing page, website, Nehros dev, consultora, consultora it",
  openGraph: {
    title:
      "Nehros - Creando Experiencias Digitales para Impulsar tu Presencia Online",
    description:
      "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel. En Nehros, te ayudamos a crear experiencias digitales únicas y efectivas.",
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
    title:
      "Nehros - Creando Experiencias Digitales para Impulsar tu Presencia Online",
    description:
      "Lanzar tu presencia online es el primer paso para llevar tu empresa a otro nivel. En Nehros, te ayudamos a crear experiencias digitales únicas y efectivas.",
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nehros",
              url: "https://nehros.com",
              description:
                "Nehros - Creando Experiencias Digitales para Impulsar tu Presencia Online",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://nehros.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Nehros",
                logo: {
                  "@type": "ImageObject",
                  url: "https://nehros.com/logo.png",
                },
              },
              author: {
                "@type": "Person",
                name: "Franco Avolio",
              },
            }),
          }}
        />
      </Head>
      <body className={RedHat.className}>{children}</body>
    </html>
  );
}
