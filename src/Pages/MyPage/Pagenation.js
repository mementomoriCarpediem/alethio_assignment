import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Pagenation({ totalPage, currentPage, setCurrentPage }) {
  const [pageArray, setPageArray] = useState([]);

  useEffect(() => {
    makePageArray(totalPage);
  }, [totalPage]);

  const makePageArray = (totalPage) => {
    const newArray = [];

    for (var i = 1; i <= totalPage; i++) {
      newArray.push(i);
      i === totalPage && setPageArray([...newArray]);
    }
  };

  return (
    <PagenationWrapper>
      {pageArray.map((page, index) => {
        return (
          <span
            key={index}
            className={page === currentPage + 1 ? 'currentPage' : ''}
            onClick={(e) =>
              setCurrentPage(Number(e.target.innerText.split(' ')[0]) - 1)
            }
          >
            {page}
          </span>
        );
      })}
    </PagenationWrapper>
  );
}

const PagenationWrapper = styled.section`
  margin-top: 15px;

  span {
    display: inline-block;
    width: 100px;
    color: blue;
    font-size: 30px;
    font-weight: 500;

    &.currentPage {
      color: red;
    }

    &:hover {
      cursor: pointer;
      background-color: lightgray;
    }
  }
`;
