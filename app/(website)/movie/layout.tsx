"use client";

import { LayoutProps } from "@/types";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { useEffect } from "react";
import { LOGIN_ROUTE } from "@/constant/routes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: LayoutProps) {
  const { data: session }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push(LOGIN_ROUTE);
    }
  }, [router, session]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
