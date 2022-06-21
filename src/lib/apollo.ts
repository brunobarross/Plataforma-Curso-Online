import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oijqvq0f3x01w70k8x86w4/master',
  cache: new InMemoryCache()
})