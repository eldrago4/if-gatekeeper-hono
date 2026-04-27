import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "1ved Cloud",
    template: "%s | 1ved Cloud",
  },
  description: "1ved Cloud — API and portfolio by Ved Bapardekar, Software Development Engineer.",
  metadataBase: new URL("https://1ved.cloud"),
  icons: {
    icon: "/signature.jpg",
    shortcut: "/signature.jpg",
    apple: "/signature.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
