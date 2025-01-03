import NextAuth from 'next-auth';
import { AUTH_CALLBACKS } from './lib/auth/auth-callbacks';
import { AUTH_EVENTS } from './lib/auth/auth-events';
import { AUTH_PROVIDERS } from './lib/auth/auth-providers';
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: AUTH_PROVIDERS,
  callbacks: AUTH_CALLBACKS,
  events: AUTH_EVENTS,
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
});
