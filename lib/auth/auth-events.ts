import { Account, Profile, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
// import { cookies } from 'next/headers';

type SigninProps = {
  user: User;
  account: Account | null;
  profile?: Profile;
  isNewUser?: boolean;
};
type SignoutProps = {
  session?: Session | any;
  token?: JWT | any;
};

export const AUTH_EVENTS = {
  async signIn({ user, account }: SigninProps) {},
  async signOut(message: SignoutProps) {
    // cookies().delete('authjs.callback-url');
    // cookies().delete('authjs.csrf-token');
    // cookies().delete('authjs.session-token');
  },
};
