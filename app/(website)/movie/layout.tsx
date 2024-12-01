"use client";

import { LayoutProps } from "@/types";
import { useEffect } from "react";
import { LOGIN_ROUTE } from "@/constant/routes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getClientAccessToken } from "@/utilities/common";

export default function RootLayout({ children }: LayoutProps) {
  const { data: session }: any = useSession();
  const router = useRouter();
  const getSession  =async ()=>{

    const session= await getClientAccessToken()
    if (!session) {
      router.push(LOGIN_ROUTE);
    }
  }
  useEffect(() => {
    getSession()
  }, [session]);

  return <>{children}</>;
}
