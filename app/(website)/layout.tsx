import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Header />
          <div className="bg-[#f9f7f8]">{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
