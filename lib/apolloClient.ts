
// export default client;
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getClientAccessToken } from "@/utilities/common";

// Create the HttpLink for the GraphQL endpoint
const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT || "http://192.168.101.159:4000",
});

// Add headers dynamically using setContext
const authLink = setContext(async (_, { headers }) => {

  try {
    const accessToken = await getClientAccessToken()
    return {
      headers: {
        ...headers,
        Authorization: `${accessToken}`
      },
    };

  } catch {
    return {
      headers: {
        ...headers,
      },
    };
  }

});

// Initialize the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine authLink and httpLink
  cache: new InMemoryCache(),
  ssrMode: true, // Important for server-side rendering
});

export default client;
