import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
// import * as serviceWorker from './serviceWorker';
import Client from 'aws-appsync'
import {ApolloProvider} from 'react-apollo'
import {Rehydrated} from 'aws-appsync-react'
import AppSync from './AppSync'
import { BrowserRouter } from "react-router-dom";

const client = new Client( {
  url: AppSync.aws_appsync_graphqlEndpoint,
  region: AppSync.aws_appsync_region,
  auth: {
    type: 'API_KEY',
    apiKey: AppSync.aws_appsync_apiKey
  }
})

const WithProvider = () => (
  <ApolloProvider client = {client}>
    <Rehydrated>
      <App/>
    </Rehydrated>
  </ApolloProvider>
)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WithProvider/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
