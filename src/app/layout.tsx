import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drug International Ltd",
  description: "Drug International Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
