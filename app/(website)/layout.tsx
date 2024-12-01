"use client";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SessionProvider } from "next-auth/react";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "sonner";

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

export default function RootLayout({
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
          <ApolloProvider client={client}>
          <Toaster />
            <Header />
            <div className="bg-[#f9f7f8]">{children}</div>
            <Footer />
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
