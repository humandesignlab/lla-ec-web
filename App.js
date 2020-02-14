import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Prompt from './components/Prompt';

const BASE_URL = 'https://floating-thicket-10292.herokuapp.com/';

const httpLink = new HttpLink({
  uri: BASE_URL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default App = () => {
  return (
    <ApolloProvider client={client}>
      <Prompt />
    </ApolloProvider>
  );
}
