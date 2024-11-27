import { loginFormSchema } from '@/schema/login';
import CredentialsProvider from 'next-auth/providers/credentials';

export const AUTH_PROVIDERS = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: 'Email', type: 'email', placeholder: 'john@mail.com' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials) {
      const validatedFormData = loginFormSchema.safeParse(credentials);
      if (validatedFormData.success) {
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

        const response = await res.json();

        if (!response.token ) {
          return null;
        }

        return {
          email,
          token:response.token
        };
      }

      return null;
    },
  }),
];
