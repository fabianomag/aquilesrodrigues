import type { Metadata } from "next";
import { Antonio, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { siteConfig } from "@/lib/config";
import { DentistJsonLd, WebSiteJsonLd } from "@/components/json-ld";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const antonio = Antonio({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s \u2014 ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${sora.variable} ${antonio.variable}`}>
      <body className="font-sans">
        <DentistJsonLd />
        <WebSiteJsonLd />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
