/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogin = /* GraphQL */ `
  query GetLogin($username: String!) {
    getLogin(username: $username) {
      username
      password
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: TableLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        password
      }
      nextToken
    }
  }
`;
