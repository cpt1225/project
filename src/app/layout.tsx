import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const alibabaFont = localFont({
  src: './AlibabaPuHuiTi-3-55-Regular.woff2',
});

export const metadata: Metadata = {
  title: "期货通",
  description: "前沿的AI交易软件",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={alibabaFont.className}
      >
        {children}
      </body>
    </html>
  );
}
