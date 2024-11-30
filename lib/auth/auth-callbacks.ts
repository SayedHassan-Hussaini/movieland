export const AUTH_CALLBACKS = {
  async authorized({ auth }: any) {
    const isAuthenticated = !!auth?.user;
    return isAuthenticated;
  },
  async signIn({ user, account, profile, email, credentials }: any) {
    if (account) {
      if (
        account.provider !== 'credentials' &&
        account.type !== 'credentials'
      ) {
        return false;
      }
    }

    // TODO: we need to make sure this user exist or email is verified here.
    return true;
  },
  async redirect({ url, baseUrl }: any) {
    if (url.startsWith('/')) return `${baseUrl}${url}`;
    else if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  },
  async jwt({ token, user }: any) {
    console.log("in jwt........",token,user)
    if (user) {
      token.user = user;
    }
    return token;
  },
  async session({ session, token }: any) {
    console.log("in session........",session,token)
    try {
      if (token && token?.user) {
        session.user = token?.user;
        session.accessToken = token?.user?.token;
        // delete session.user.accessToken;
      }
      return session;
    } catch (error) {
      return null;
    }
  },
};
