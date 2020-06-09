/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLoginInput = {
  username: string,
  password: string,
};

export type UpdateLoginInput = {
  username: string,
  password?: string | null,
};

export type DeleteLoginInput = {
  username: string,
};

export type TableLoginFilterInput = {
  username?: TableStringFilterInput | null,
  password?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateLoginMutationVariables = {
  input: CreateLoginInput,
};

export type CreateLoginMutation = {
  createLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type UpdateLoginMutationVariables = {
  input: UpdateLoginInput,
};

export type UpdateLoginMutation = {
  updateLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type DeleteLoginMutationVariables = {
  input: DeleteLoginInput,
};

export type DeleteLoginMutation = {
  deleteLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type GetLoginQueryVariables = {
  username: string,
};

export type GetLoginQuery = {
  getLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type ListLoginsQueryVariables = {
  filter?: TableLoginFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoginsQuery = {
  listLogins:  {
    __typename: "LoginConnection",
    items:  Array< {
      __typename: "Login",
      username: string,
      password: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLoginSubscriptionVariables = {
  username?: string | null,
  password?: string | null,
};

export type OnCreateLoginSubscription = {
  onCreateLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type OnUpdateLoginSubscriptionVariables = {
  username?: string | null,
  password?: string | null,
};

export type OnUpdateLoginSubscription = {
  onUpdateLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};

export type OnDeleteLoginSubscriptionVariables = {
  username?: string | null,
  password?: string | null,
};

export type OnDeleteLoginSubscription = {
  onDeleteLogin:  {
    __typename: "Login",
    username: string,
    password: string,
  } | null,
};
