
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT || "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
  ssrMode: true, // Important for server-side rendering
});

export default client;