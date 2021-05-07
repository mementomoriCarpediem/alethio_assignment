import React from 'react';
import styled from 'styled-components';

import { API_endpoint, isMobile_mediaQuery } from '../../config';

import { useMediaQuery } from 'react-responsive';

import LoadingIndicator from '../../Components/LoadingIndicator';

import useGetOrderData from './MyPageLogic';

import Header from '../../Components/Header/Header';
import ProductList from './ProductList';
import Pagenation from './Pagenation';

export default function Mypage() {
  const isMobile = useMediaQuery({
    query: `${isMobile_mediaQuery}`,
  });

  const [
    isLoading,
    productList,
    totalPage,
    currentPage,
    setCurrentPage,
  ] = useGetOrderData(API_endpoint);

  return (
    <>
      <Header />
      <MypageWrapper className={isMobile && 'mobile'}>
        <ProductList productData={productList} />
        {isLoading && <LoadingIndicator />}
        <Pagenation
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMobile={isMobile}
        />
      </MypageWrapper>
    </>
  );
}

export const MypageWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('column')};
  width: 100%;
  height: 100vh;

  &.mobile {
    padding: 0 20px;
  }
`;
