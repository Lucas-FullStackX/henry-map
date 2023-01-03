import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_SCHEMA } from '../constants';

const client = new ApolloClient({
  uri: API_SCHEMA,
  cache: new InMemoryCache()
});

export default client;
