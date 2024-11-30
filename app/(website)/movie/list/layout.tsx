"use client";

import { LayoutProps } from "@/types";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function RootLayout({ children }: LayoutProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
