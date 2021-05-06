export default function useLoginHandleSubmit(
  endpoint,
  email,
  password,
  dispatch,
  action,
  props,
) {
  const handleSubmit = () => {
    fetch(`${endpoint}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(action(data.token));
        props.history.push('/');
      })
      .catch((err) => alert('비밀번호는 8자리 이상입니다.'));
  };

  return [handleSubmit];
}
