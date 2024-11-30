"use server";

import { signOut } from "@/auth";
import { cookies } from "next/headers";

export const logout = async () => {
  try {
    const data = await signOut({
      redirect: true,
    });
    cookies().delete("authjs.callback-url");
    cookies().delete("authjs.csrf-token");
    cookies().delete("authjs.session-token");
    return data;
  } catch (error) {
    return error;
  }
};
export const login = async () => {
  try {
    const data = await signOut({
      redirect: false,
    });
    cookies().delete("authjs.callback-url");
    cookies().delete("authjs.csrf-token");
    cookies().delete("authjs.session-token");
    return data;
  } catch (error) {
    return error;
  }
};
