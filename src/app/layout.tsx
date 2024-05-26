import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
