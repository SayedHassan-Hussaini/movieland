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
      // Validate the credentials using the schema
      const validatedFormData = loginFormSchema.safeParse(credentials);
      if (validatedFormData.success) {
        const { email, password } = validatedFormData.data;

        const res = await fetch(`${process.env.SERVER_API_URL}/login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const response = await res.json();

        if (!response.token) {
          return null;
        }

        return {
          id: response.id,        
          email,                  
          token: response.token, 
          // Add any other necessary user fields here
        };
      }

      // Return null if the form validation fails
      return null;
    },
  }),
];
