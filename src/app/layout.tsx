import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speed to Lead | Abdulrahman Suleiman | AI",
  description: "Get your speed to lead advantage. Enter your details to get started.",
  openGraph: {
    title: "Speed to Lead | Abdulrahman Suleiman | AI",
    description: "Get your speed to lead advantage.",
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
      <body className={`${spaceGrotesk.variable} antialiased`} style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
