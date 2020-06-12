import React from 'react';

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Brand from '../components/Brand';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';
import { useFormik } from 'formik';

const HeadingText = styled.div`
  line-height: 28px;
  font-weight: 400;
  font-size: 20px;
  color: var(--dark);
`;

const BrandContainer = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  padding-bottom: 24px;
  padding-top: 48px;
  line-height: 28px;
  font-weight: 400;
  font-size: 32px;
  color: #1a1f36;
`;

const FormLayout = styled.div`
  padding-right: 48px;
  padding-left: 48px;
  padding-bottom: 32px;
  padding-top: 48px;
  background-color: white;
  max-width: 448px;
  width: 100%;
  margin: 0px auto;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

const FormControl = styled(Form.Control)`
  min-height: 44px;
  outline: none;
  border: 1px solid #ced4da;

  &:focus {
    border: 1px solid #ced4da;
  }
`;

const FormLabel = styled(Form.Label)`
  margin-top: 12px;
  font-size: 14px;
  color: var(--secondary);
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  line-height: 28px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  transition: all var(--speed) ease;

  &:hover,
  &:active,
  &:selected {
    background: var(--primary);
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.0625),
      0 4px 8px 0 rgba(0, 0, 0, 0.125);
  }
`;

const LabelAlternate = styled.span`
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
  margin-right: 0px;
  margin-left: auto;
  transition: all 0.125s ease-in-out;

  &:hover {
    color: var(--secondary);
  }
`;

const REGISTER_USER = gql`
  mutation RegisterAccount($username: String, $password: String) {
    createLogin(input: { username: $username, password: $password }) {
      username
      password
    }
  }
`;

const Register = () => {
  const [registerUser, { data }] = useMutation(REGISTER_USER);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: ({ username, password }) => {
      try {
        registerUser({ variables: { username, password } });
        console.log(username, password);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <PageLayout>
      <BrandContainer>
        <Brand to="/">doctorproctorapp</Brand>
      </BrandContainer>
      <FormLayout>
        <div>
          <HeadingText>Create a new account</HeadingText>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                name="username"
                autoComplete="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirm">
              <FormLabel>Confirm password</FormLabel>
              <FormControl
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="my-4">
              <Form.Check
                type="checkbox"
                label="Agree to Terms and Conditions"
              />
            </Form.Group>
            <StyledButton variant="primary" type="submit">
              Create an account
            </StyledButton>
          </Form>
        </div>
      </FormLayout>
    </PageLayout>
  );
};

// export default compose(
//   graphql(GET_LOGIN, {
//     options: {
//       fetchPolicy: 'cache-and-network',
//     },
//     props: (props) => ({
//       data: props.data,
//     }),
//   })
// )(Register);

export default Register;
