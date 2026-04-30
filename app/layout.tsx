import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentalCare - Clínica Odontológica | Cuidando do Seu Sorriso",
  description:
    "Clínica odontológica moderna com atendimento humanizado. Oferecemos tratamentos de limpeza, restaurações, clareamento, ortodontia e muito mais. Agende sua consulta!",
  keywords: [
    "dentista",
    "clínica odontológica",
    "tratamento dental",
    "ortodontia",
    "clareamento dental",
    "implantes dentários",
  ],
  authors: [{ name: "DentalCare" }],
  openGraph: {
    title: "DentalCare - Clínica Odontológica",
    description: "Cuidando do seu sorriso com excelência e carinho",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
