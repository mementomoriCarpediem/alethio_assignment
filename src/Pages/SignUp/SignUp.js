import React, { useRef } from 'react';
import styled from 'styled-components';

import { API_endpoint } from '../../config';

import signUpInputs from './SignUpInputData';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/action';

import useInputs from '../../hooks/useInputs';
import useValidation from './SignUpLogic';

import StyledButtonUnit from '../../Components/Button';
import StyledInputUnit from '../../Components/Input';

export default function SignUp(props) {
  const dispatch = useDispatch();
  const cursorRef = useRef(null);

  const [form, handleInput] = useInputs({});
  const [
    isEmailValid,
    isPasswordValid,
    handleSubmit,
    onBlurEmailValidation,
  ] = useValidation(
    form.password,
    form.rePassword,
    form.email,
    form.phoneNumber,
    cursorRef,
    API_endpoint,
    dispatch,
    loginUser,
    props,
  );

  return (
    <SignUpWrapper>
      <SignUpTitle>회원가입</SignUpTitle>
      <div>
        {signUpInputs.map((input) => {
          return (
            <SignUpInput
              key={input.id}
              labelText={input.labelText}
              className={
                ((input.name === 'email' && !isEmailValid) ||
                  (input.name === 'password' && !isPasswordValid)) &&
                'invalid'
              }
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleInput}
              onBlur={input.name === 'email' ? onBlurEmailValidation : null}
              ref={input.name === 'email' ? cursorRef : null}
            />
          );
        })}

        <SignUpButton
          name={'signUpSubmit'}
          buttonText={'가입하기'}
          onClick={handleSubmit}
        />
      </div>
    </SignUpWrapper>
  );
}

export const SignUpWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('column')};
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  div {
    ${({ theme }) => theme.flexMixin('column')};
    width: 100%;
  }
`;

export const SignUpTitle = styled.h1`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

export const SignUpInput = styled(StyledInputUnit)`
  input {
    width: 100%;
    height: 30px;

    &.invalid {
      border: 3px solid red;
    }
  }
`;

export const SignUpButton = styled(StyledButtonUnit)`
  height: 40px;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;
`;
