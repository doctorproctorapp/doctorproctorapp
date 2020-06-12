import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const REGISTER_USER = gql`
  mutation RegisterAccount($username: String, $password: String) {
    createLogin(input: { username: $username, password: $password }) {
      username
      password
    }
  }
`;

class Test extends Component {
  render() {
    return <div></div>;
  }
}

export default withApollo(
  compose(
    graphql(REGISTER_USER, {
      props: ({ data }) => data,
    })
  )
);
