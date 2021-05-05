import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

function ProductUnit({ id, itemName, history }) {
  const goToDetailPage = (id) => {
    history.push(`/mypage/order/${id}`);
  };

  return (
    <ProductUnitWraaper onClick={() => goToDetailPage(id)}>
      <td>{id}</td>
      <td>{itemName}</td>
    </ProductUnitWraaper>
  );
}

const ProductUnitWraaper = styled.tr`
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  td {
    font-size: 20px;
    padding: 10px 0;
  }
`;

export default withRouter(ProductUnit);
