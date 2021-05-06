import { useState, useEffect, useCallback } from 'react';

export default function useValidation(
  password,
  rePassword,
  email,
  phoneNumber,
  ref,
  endpoint,
  dispatch,
  action,
  props,
) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordSame, setIsPasswordSame] = useState(true);

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserToken = () => {
    fetch(`${endpoint}/sign-up`, {
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
        dispatch(action(data.token));
        props.history.push('/');
      });
  };

  const handleSubmit = useCallback(() => {
    if (!isEmailValid) {
      alert('올바른 이메일을 입력해주세요');
      ref.current.focus();
    }
    !isPasswordValid &&
      alert(
        '올바른 비밀번호를 입력해주세요. 비밀번호는 8 ~ 15자의 영문 또는 숫자로 구성됩니다.',
      );
    !isPasswordSame && alert('비밀번호가 일치하지 않습니다.');

    isEmailValid && isPasswordValid && isPasswordSame && getUserToken();
  }, [getUserToken, isEmailValid, isPasswordSame, isPasswordValid, ref]);

  const onBlurEmailValidation = () => {
    if (email) {
      const REGEXP_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      email.match(REGEXP_EMAIL) !== null
        ? setIsEmailValid(true)
        : setIsEmailValid(false);
    }
  };

  return [isEmailValid, isPasswordValid, handleSubmit, onBlurEmailValidation];
}
