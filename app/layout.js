import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ProfileHeader from "@/components/ProfileHeader";

export const metadata = {
  title: "Mr Khan blog",
  description: "This is a personal blog websites created by Jamil Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="max-w-4xl mx-auto">
        <ProfileHeader />

        <main className="max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
