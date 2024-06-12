import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Mr Khan blog",
  description: "This is a personal blog websites created by Jamil Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
