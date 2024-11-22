import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/Header";
import styles from "./css/Layout.module.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Naiomi Cleans",
  description: "Naiomi Cleans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
