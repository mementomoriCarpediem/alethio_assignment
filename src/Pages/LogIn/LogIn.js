import React from 'react';
import styled from 'styled-components';

import { API_endpoint } from '../../config';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/action';

import useInputs from '../../hooks/useInputs';
import useLoginHandleSubmit from './LoginLogic';

import loginInputData from './LoginInputData';

import {
  SignUpWrapper,
  SignUpTitle,
  SignUpInput,
  SignUpButton,
} from '../SignUp/SignUp';

export default function LogIn(props) {
  const [form, handleInput] = useInputs({});
  const dispatch = useDispatch();

  const [handleSubmit] = useLoginHandleSubmit(
    API_endpoint,
    form.email,
    form.password,
    dispatch,
    loginUser,
    props,
  );

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      {loginInputData.map((item) => {
        return (
          <LoginInput
            key={item.id}
            labelText={item.labelText}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            onChange={handleInput}
          />
        );
      })}

      <LoginButton
        name={'signUpSubmit'}
        buttonText={'로그인'}
        onClick={handleSubmit}
      />
    </LoginWrapper>
  );
}

const LoginWrapper = styled(SignUpWrapper)``;

const LoginTitle = styled(SignUpTitle)``;

const LoginInput = styled(SignUpInput)``;

const LoginButton = styled(SignUpButton)``;
