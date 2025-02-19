import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/nav-bar";

const funnel = Funnel_Display({
  weight:'400',
  subsets: ['latin'],
  display: 'swap'
});

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
        <div className={`${funnel.className} flex flex-col h-screen`}>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
