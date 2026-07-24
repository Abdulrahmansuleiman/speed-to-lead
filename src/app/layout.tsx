import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
