import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProductUnit from './ProductUnit';

export default function ProductList({ productData }) {
  return (
    <ProductListWrapper>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>itemName</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => {
            return (
              <ProductUnit
                key={item.id}
                id={item.id}
                itemName={item.itemName}
              />
            );
          })}
        </tbody>
      </table>
    </ProductListWrapper>
  );
}

const ProductListWrapper = styled.section`
  table {
    border: 5px solid ${({ theme }) => theme.borderGray};
  }

  th {
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 500;
    border: 5px solid ${({ theme }) => theme.borderGray};

    &:first-child {
      width: 100px;
    }
    &:last-child {
      width: 500px;
    }
  }

  tr {
    text-align: center;
  }
`;

ProductList.propTypes = {
  productData: PropTypes.array.isRequired,
};
