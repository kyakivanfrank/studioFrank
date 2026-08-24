import type { Metadata, Viewport } from "next";
import { Inter, Josefin_Sans } from "next/font/google";

import "./globals.css";
import { Backdrop } from "@/components/backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/data/site";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.owner}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner, url: site.url }],
  creator: site.owner,
  keywords: [
    "frontend developer Uganda",
    "Next.js developer Kampala",
    "React developer",
    "trading dashboard developer",
    "web design Uganda",
    "Frank Ivan Kyakusse",
    "studioFrank",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.owner}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/og.png"],
  },
  icons: { icon: "/mark.svg", apple: "/mark.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.owner,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.role,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${josefin.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="relative min-h-dvh antialiased">
        <script
          type="application/ld+json"
          // Structured data for search results; content is static and trusted.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Backdrop />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
