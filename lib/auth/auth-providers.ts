import { loginFormSchema } from '@/schema/login';
import CredentialsProvider from 'next-auth/providers/credentials';
import client from '../apolloClient';
import { SIGNIN_MUTATION } from '@/queries';

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

        const response = await client.mutate({
          mutation: SIGNIN_MUTATION,
          variables: { email, password },
        });
        if (response?.errors) {
          return null;
        }

        return {
          id: "id",        
          email:email,                  
          token: response.data?.signin, 
          // Add any other necessary user fields here
        };
      }

      // Return null if the form validation fails
      return null;
    },
  }),
];
