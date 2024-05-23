import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={clsx(inter.className, "bg-background")}>
        <ThemeProvider forcedTheme="dark" attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
