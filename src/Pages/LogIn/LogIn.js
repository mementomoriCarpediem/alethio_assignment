import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { API_endpoint, isMobile_mediaQuery } from '../../config';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/action';

import useInputs from '../../hooks/useInputs';
import useLoginHandleSubmit from './LoginLogic';

import loginInputData from './LoginInputData';

import Header from '../../Components/Header/Header';

import {
  SignUpWrapper,
  SignUpTitle,
  SignUpInput,
  SignUpButton,
} from '../SignUp/SignUp';

export default function LogIn(props) {
  const [form, handleInput] = useInputs({});
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: `${isMobile_mediaQuery}`,
  });

  const [handleSubmit] = useLoginHandleSubmit(
    API_endpoint,
    form.email,
    form.password,
    dispatch,
    loginUser,
    props,
  );

  return (
    <>
      <Header />
      <LoginWrapper className={isMobile && 'mobile'}>
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
    </>
  );
}

const LoginWrapper = styled(SignUpWrapper)``;

const LoginTitle = styled(SignUpTitle)``;

const LoginInput = styled(SignUpInput)``;

const LoginButton = styled(SignUpButton)``;
