import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SITE } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
