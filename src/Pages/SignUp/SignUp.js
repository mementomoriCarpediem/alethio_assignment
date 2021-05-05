import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import API_endpoint from '../../config';

// import signUpInputs from './SignUpInputData';

import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/action';

import StyledButtonUnit from '../../Components/Button';
import Input from '../../Components/Input';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordSame, setIsPasswordSame] = useState(true);

  const dispatch = useDispatch();
  const token = useSelector((store) => store.loginReducer);
  console.log(token);

  console.log(isEmailValid, isPasswordValid, isPasswordSame);

  const cursorRef = useRef(null);

  const SET = {
    email: setEmail,
    password: setPassword,
    rePassword: setRePassword,
    phone: setPhoneNumber,
  };

  const handleInput = (e) => {
    const setState = SET[e.target.name];
    setState(e.target.value);
  };

  useEffect(() => {
    if (password) {
      const REGEXP_PASSWORD_8to15CHARACTER = /^[0-9a-zA-Z]{8,15}$/i;
      password.match(REGEXP_PASSWORD_8to15CHARACTER) !== null
        ? setIsPasswordValid(true)
        : setIsPasswordValid(false);
      if (rePassword) {
        password === rePassword
          ? setIsPasswordSame(true)
          : setIsPasswordSame(false);
      }
    }
  }, [password, rePassword]);

  const handleSubmit = () => {
    if (!isEmailValid) {
      alert('올바른 이메일을 입력해주세요');
      cursorRef.current.focus();
    }
    !isPasswordValid && alert('올바른 비밀번호를 입력해주세요');
    !isPasswordSame && alert('비밀번호가 일치하지 않습니다.');

    isEmailValid &&
      isPasswordValid &&
      isPasswordSame &&
      fetch(`${API_endpoint}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          mobile: phoneNumber,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(loginUser(data.token));
          props.history.push('/');
        });
  };

  const onBlurEmailValidation = () => {
    if (email) {
      const REGEXP_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      email.match(REGEXP_EMAIL) !== null
        ? setIsEmailValid(true)
        : setIsEmailValid(false);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>회원가입</SignUpTitle>
      <div>
        {/* 각 input 마다 적용 속성 및 함수가 다르고, ref 속성 관련 오류가 나는 이유로 map함수 사용 X => 리팩토링 시 재검토 하기 */}
        {/* {signUpInputs.map((input) => {
          return (
            <SignUpInput
              key={input.id}
              labelText={input.labelText}
              // ref={input.name === 'email' && cursorRef}
              className={
                input.name === isInputValid[0] && !isInputValid[1] && 'invalid'
              }
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleInput}
              onBlur={checkValidation}
            />
          );
        })} */}
        <SignUpInput
          labelText={'이메일'}
          className={!isEmailValid && 'invalid'}
          type={'email'}
          name={'email'}
          placeholder={'alethio@gmail.com'}
          onChange={handleInput}
          onBlur={onBlurEmailValidation}
          ref={cursorRef}
        />
        <SignUpInput
          labelText={'비밀번호'}
          className={!isPasswordValid && 'invalid'}
          type={'password'}
          name={'password'}
          placeholder={'비밀번호를 입력해주세요'}
          onChange={handleInput}
        />
        <SignUpInput
          labelText={'비밀번호확인'}
          type={'password'}
          name={'rePassword'}
          placeholder={'다시한번 동일한 비밀번호를 입력해주세요'}
          onChange={handleInput}
        />
        <SignUpInput
          labelText={'연락처'}
          type={'tel'}
          name={'phone'}
          placeholder={'0101234567'}
          onChange={handleInput}
        />

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  div {
    display: flex;
    flex-direction: column;
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

export const SignUpInput = styled(Input)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  input {
    width: 100%;
    height: 30px;

    &.invalid {
      border: 2px solid red;
    }
  }
`;

export const SignUpButton = styled(StyledButtonUnit)`
  height: 40px;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;
`;
