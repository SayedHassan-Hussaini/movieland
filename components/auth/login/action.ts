'use server';

import { signIn } from '@/auth';
import { LOGIN_ROUTE } from '@/constant/routes';
import { loginFormSchema } from '@/schema/login';
import { AuthError } from 'next-auth';
import * as z from 'zod';

export const login = async (formData: z.infer<typeof loginFormSchema>) => {


  try {
    const validatedFormData = loginFormSchema.safeParse(formData);
    if (!validatedFormData.success) {
      return { error: 'Invalid credenttials' };
    }
    const { email, password } = validatedFormData.data;
    const res = await fetch(`${process.env.SERVER_API_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (res && res.status != 200 && res.status != 401) {
      const result = await res.json();
      return { error: result.message || result?.non_field_errors || result.detail || "Invalid credentials!'" };
    }

    await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: LOGIN_ROUTE,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
