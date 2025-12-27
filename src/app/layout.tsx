import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Mayke | Developer Made Down Under",
  description: "Mayke is a developer made down under in Sydney, Australia. We build beautiful apps and digital experiences.",
  openGraph: {
    title: "Mayke | Developer Made Down Under",
    description: "Mayke is a developer made down under in Sydney, Australia. We build beautiful apps and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable} ${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
