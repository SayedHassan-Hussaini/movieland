"use server";

import { signIn } from "@/auth";
import { LOGIN_ROUTE } from "@/constant/routes";
import { loginFormSchema } from "@/schema/login";
// import AuthError  from 'next-auth';
import * as z from "zod";
import { SIGNIN_MUTATION } from "@/queries";
import client from "@/lib/apolloClient";

export const login = async (formData: z.infer<typeof loginFormSchema>) => {
  try {
    const validatedFormData = loginFormSchema.safeParse(formData);
    if (!validatedFormData.success) {
      return { error: "Invalid credenttials" };
    }
    // Login request
    const { email, password } = validatedFormData.data;
    const response = await client.mutate({
      mutation: SIGNIN_MUTATION,
      variables: { email, password },
    });
    console.log("log in action file.........", response);
    if (response?.errors) {
      return {
        error: response?.errors?.[0].message || "Invalid credentials!'",
      };
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: LOGIN_ROUTE,
    });
  } catch (error: any) {
    if (error) {
      console.log("error in catch..........",error)
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
