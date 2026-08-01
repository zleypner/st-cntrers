import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16A34A",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.doctorName }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    // TODO: Agregar imagen OG cuando esté disponible
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    // TODO: Agregar imagen Twitter cuando esté disponible
    // images: ["/twitter-image.jpg"],
  },
  // TODO: Agregar verification cuando esté disponible
  // verification: {
  //   google: "google-site-verification-code",
  // },
  alternates: {
    canonical: "/",
    // TODO: Agregar alternates cuando se implemente multiidioma
    // languages: {
    //   "es-ES": "/",
    //   "en-US": "/en",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Schema - Dentist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: siteConfig.name,
              description: siteConfig.description,
              // TODO: Agregar datos reales cuando estén disponibles
              // url: "https://www.clinicadentalmarcela.com",
              // telephone: siteConfig.contact.phone,
              // email: siteConfig.contact.email,
              // address: {
              //   "@type": "PostalAddress",
              //   streetAddress: siteConfig.location.address,
              //   addressLocality: siteConfig.location.city,
              //   addressCountry: siteConfig.location.country,
              // },
              // openingHoursSpecification: [
              //   {
              //     "@type": "OpeningHoursSpecification",
              //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              //     opens: "09:00",
              //     closes: "18:00",
              //   },
              // ],
              priceRange: "$$",
              medicalSpecialty: "Dentistry",
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
