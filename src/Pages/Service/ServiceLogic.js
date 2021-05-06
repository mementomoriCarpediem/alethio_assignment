export const handleOrder = (userToken, props) => {
  if (userToken) {
    alert('주문 성공!');
  } else {
    alert('로그인 하신 후 주문가능합니다.');
    props.history.push('/login');
  }
};
