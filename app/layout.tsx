import type { Metadata } from "next";
import "./globals.css";

import NavBar from "@/app/components/nav-bar";

export const metadata: Metadata = {
  title: "Flagz",
  description: "Test your knowledge of flags from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
