import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

import config from '../AppSync';

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;

const auth = {
  type: config.aws_appsync_authenticationType,
  apiKey: config.aws_appsync_apiKey,
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const WithProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default WithProvider;
