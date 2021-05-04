import React, { useState } from 'react';
import styled from 'styled-components';

import API_endpoint from '../../config';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/action';

import {
  SignUpWrapper,
  SignUpTitle,
  SignUpInput,
  SignUpButton,
} from '../SignUp/SignUp';

export default function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    e.target.name === 'email' && setEmail(e.target.value);
    e.target.name === 'password' && setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  // const token = useSelector((store) => store.loginReducer);
  // console.log(token);

  const handleSubmit = () => {
    fetch(`${API_endpoint}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(loginUser(data.token));
        props.history.push('/');
      })
      .catch((err) => alert('비밀번호는 8자리 이상입니다.'));
  };

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginInput
        labelText={'이메일'}
        type={'email'}
        name={'email'}
        placeholder={'alethio@gmail.com'}
        onChange={handleInput}
      />
      <LoginInput
        labelText={'비밀번호'}
        type={'password'}
        name={'password'}
        placeholder={'비밀번호를 입력해주세요'}
        onChange={handleInput}
      />

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
