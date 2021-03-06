import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://vnnzk28w.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});
