import React from 'react';
import styled from 'styled-components';

export default function LoadingIndicator() {
  return <Loading>데이터 로딩 중....</Loading>;
}

const Loading = styled.h1`
  margin-top: 10px;
  color: orange;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;
