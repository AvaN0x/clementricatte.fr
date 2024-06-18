import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { BASE_URL } from "@/lib/constants";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s · Clément RICATTE`,
    default: "Clément RICATTE",
  },
  description: 'Site personnel de Clément "AvaN0x" RICATTE',
  metadataBase: new URL(BASE_URL),
  creator: "Clément RICATTE",
  authors: [
    {
      name: "Clément Ricatte",
      url: "https://github.com/AvaN0x",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://avatars3.githubusercontent.com/u/27494805",
        width: 460,
        height: 460,
        alt: "AvaN0x's logo",
      },
    ],
  },
  icons: [
    { rel: "icon", url: "https://avatars3.githubusercontent.com/u/27494805" },
    {
      rel: "apple-touch-icon",
      url: "https://avatars3.githubusercontent.com/u/27494805",
    },
    {
      rel: "mask-icon",
      url: "https://avatars3.githubusercontent.com/u/27494805",
    },
    {
      rel: "image/x-icon",
      url: "https://avatars3.githubusercontent.com/u/27494805",
    },
  ],
  twitter: {
    creator: "@ClemAvaN0x",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(inter.className, "transition-colors")}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors />

          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
