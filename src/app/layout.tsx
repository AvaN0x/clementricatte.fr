import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import MouseRadialGradient from "@/components/MouseRadialGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clément RICATTE",
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
          <main>
            <MouseRadialGradient
              className={cn(
                "-mt-12 pt-12 h-screen overflow-x-hidden",
                "bg-gradient-to-tr from-10% via-80%",
                "from-violet-100/20 via-violet-50/20 to-violet-100/20",
                "dark:from-violet-900/20 dark:via-violet-950/20 dark:to-violet-900/20"
              )}
            >
              {children}
            </MouseRadialGradient>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
