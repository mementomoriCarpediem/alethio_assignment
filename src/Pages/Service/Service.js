import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import Header from '../../Components/Header/Header';
import Logo from '../../Components/Logo';
import StyledButtonUnit from '../../Components/Button';

import { MypageWrapper } from '../MyPage/MyPage';

import { handleOrder } from './ServiceLogic';

export default function Service(props) {
  const userToken = useSelector((store) => store.loginReducer);

  return (
    <>
      <Header />
      <ServiceWrapper>
        <OrderContainer>
          <ProductImage width={'250px'} url={'/images/productImage.jpeg'} />
          <OrderButton
            buttonText={'주문하기'}
            onClick={() => handleOrder(userToken, props)}
          />
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
  ${({ theme }) => theme.flexMixin('column')};
`;

const ProductImage = styled(Logo)``;

const OrderButton = styled(StyledButtonUnit)`
  margin-top: 20px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;
`;
