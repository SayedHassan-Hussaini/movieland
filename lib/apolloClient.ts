

// export default client;
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getClientAccessToken } from "@/utilities/common";

// Create the HttpLink for the GraphQL endpoint
const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT || "https://node-graphql-server.onrender.com",
});

// Add headers dynamically using setContext
const authLink = setContext(async(_, { headers }) => {

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${await getClientAccessToken()}`
    },
  };
});

// Initialize the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine authLink and httpLink
  cache: new InMemoryCache(),
  ssrMode: true, // Important for server-side rendering
});

export default client;
