import type { Metadata } from "next";
import { Inter, Playfair_Display, Nunito } from "next/font/google";
import { Header, Footer, SkipLink } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kindness for Autism | Spreading Joy and Acceptance",
    template: "%s | Kindness for Autism",
  },
  description:
    "Spreading joy, kindness, and acceptance in our community. Join us in creating a more inclusive world where everyone is celebrated for who they are.",
  keywords: [
    "autism",
    "autism awareness",
    "kindness",
    "nonprofit",
    "community",
    "acceptance",
    "inclusion",
  ],
  authors: [{ name: "Kindness for Autism" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kindness for Autism",
    title: "Kindness for Autism | Spreading Joy and Acceptance",
    description:
      "Spreading joy, kindness, and acceptance in our community. Join us in creating a more inclusive world where everyone is celebrated for who they are.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindness for Autism | Spreading Joy and Acceptance",
    description:
      "Spreading joy, kindness, and acceptance in our community.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${nunito.variable}`}>
      <body className="antialiased">
          <SkipLink />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
