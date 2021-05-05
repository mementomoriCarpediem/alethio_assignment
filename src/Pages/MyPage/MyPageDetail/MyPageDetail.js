import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API_endpoint from '../../../config';

import ProductList from '../ProductList';

import { MypageWrapper } from '../MyPage';
import { SignUpTitle } from '../../SignUp/SignUp';

export default function MyPageDetail(props) {
  const { id } = props.match.params;
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetailData(id);
  }, []);

  const getProductDetailData = async (id) => {
    await fetch(`${API_endpoint}/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail([data]);
      });
  };

  return (
    <MyPageDetailWrapper>
      <MyPageDetailTitle>주문상세내용</MyPageDetailTitle>
      <ProductList productData={productDetail} />
    </MyPageDetailWrapper>
  );
}

const MyPageDetailWrapper = styled(MypageWrapper)``;

const MyPageDetailTitle = styled(SignUpTitle)``;
