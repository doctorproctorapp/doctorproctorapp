import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import * as AWS from 'aws-sdk';
import config from './AppSync';
import awsconfig from './aws-exports';

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    apiKey: config.aws_appsync_apiKey,
  },
});

// const client = new AWSAppSyncClient({
//   url:
//     'https://bxe5v6iprzgmvcsh6qulm7cb4y.appsync-api.us-west-2.amazonaws.com/graphql',
//   region: 'us-west-2',
//   auth: {
//     type: 'API_KEY',
//     apiKey: 'da2-jp7u5wobkref3bwe3p5t5dv2jy',
//   },
// });

console.log(client);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Rehydrated>
        <App />
      </Rehydrated>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
