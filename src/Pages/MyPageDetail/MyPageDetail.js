import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { API_endpoint, isMobile_mediaQuery } from '../../../config';

import useGetDetailPageData from './MyPageDetailLogic';

import ProductList from '../ProductList';

import { MypageWrapper } from '../MyPage';
import { SignUpTitle } from '../../SignUp/SignUp';

export default function MyPageDetail(props) {
  const isMobile = useMediaQuery({
    query: `${isMobile_mediaQuery}`,
  });

  const [productDetail] = useGetDetailPageData(props, API_endpoint);

  return (
    <MyPageDetailWrapper className={isMobile && 'mobile'}>
      <MyPageDetailTitle>주문상세내용</MyPageDetailTitle>
      <ProductList productData={productDetail} />
    </MyPageDetailWrapper>
  );
}

const MyPageDetailWrapper = styled(MypageWrapper)``;

const MyPageDetailTitle = styled(SignUpTitle)``;
