import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = "https://maisondoree.com.ar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A1A1A",
};
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Dorée | Fine Dining en Recoleta, Buenos Aires",
  description:
    "Restaurante de alta cocina francesa en el corazón de Recoleta. Reservá tu mesa y viví una experiencia gastronómica única con los mejores ingredientes y técnicas culinarias.",
  keywords: [
    "restaurante fine dining Buenos Aires",
    "cocina francesa Recoleta",
    "restaurante gourmet Buenos Aires",
    "mejor restaurante Recoleta",
    "Maison Dorée",
  ],
  authors: [{ name: "Maison Dorée" }],
  creator: "Maison Dorée",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Maison Dorée | Fine Dining en Recoleta, Buenos Aires",
    description:
      "Restaurante de alta cocina francesa en el corazón de Recoleta. Una experiencia gastronómica única desde 1998.",
    siteName: "Maison Dorée",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Dorée | Fine Dining en Recoleta",
    description:
      "Una experiencia gastronómica única en el corazón de Buenos Aires.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
