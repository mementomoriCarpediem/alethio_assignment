import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import API_endpoint from '../../config';

import Header from '../../Components/Header/Header';
import ProductList from './ProductList';
import Pagenation from './Pagenation';

export default function Mypage(props) {
  const [productList, setProductList] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getOrderData();
  }, [currentPage]);

  const getOrderData = async () => {
    await fetch(`${API_endpoint}/order?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data.totalPages);
        setProductList([...data.content]);
      });
  };

  return (
    <>
      <Header />
      <MypageWrapper>
        <ProductList productData={productList} />
        <Pagenation
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </MypageWrapper>
    </>
  );
}

export const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
