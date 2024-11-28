"use client";


import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";

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
        <ApolloProvider client={client}>
          <Header />
          <div className="bg-[#f9f7f8]">{children}</div>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
