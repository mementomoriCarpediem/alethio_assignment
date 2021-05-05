import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import Header from '../../Components/Header/Header';
import Logo from '../../Components/Logo';
import StyledButtonUnit from '../../Components/Button';

import { MypageWrapper } from '../MyPage/MyPage';

export default function Service(props) {
  const userToken = useSelector((store) => store.loginReducer);

  const handleOrder = () => {
    if (userToken) {
      alert('주문 성공!');
    } else {
      alert('로그인 하신 후 주문가능합니다.');
      props.history.push('/login');
    }
  };

  return (
    <>
      <Header />
      <ServiceWrapper>
        <OrderContainer>
          <ServiceLogo width={'250px'} url={'/images/serviceLogo.jpeg'} />
          <OrderButton buttonText={'주문하기'} onClick={handleOrder} />
        </OrderContainer>
      </ServiceWrapper>
    </>
  );
}

const ServiceWrapper = styled(MypageWrapper)`
  justify-content: flex-start;
  margin-top: 70px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceLogo = styled(Logo)``;

const OrderButton = styled(StyledButtonUnit)`
  margin-top: 20px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;
`;
