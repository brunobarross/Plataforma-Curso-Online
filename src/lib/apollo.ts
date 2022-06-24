import { ApolloClient, InMemoryCache } from "@apollo/client";


// const defaultOptions: DefaultOptions = {


// };

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env. VITE_API_ACESS_TOKEN} `
  },
  cache: new InMemoryCache(),
   defaultOptions: {
    watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },

  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  }, 
}
})