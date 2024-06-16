import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s · Clément RICATTE`,
    default: "Clément RICATTE",
  },
  description: "Par AvaN0x / Clément RICATTE",
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
  authors: [
    {
      name: "Clément Ricatte",
      url: "https://github.com/AvaN0x",
    },
  ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(inter.className, "transition-colors")}>
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors />

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
