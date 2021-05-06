import React from 'react';
import styled from 'styled-components';

import usePageMove from './PagenationLogic';

export default function Pagenation({
  totalPage,
  currentPage,
  setCurrentPage,
  isMobile,
}) {
  const [pageArray] = usePageMove(totalPage);

  return (
    <PagenationWrapper>
      {pageArray.map((page, index) => {
        return (
          <span
            key={index}
            className={
              page === currentPage + 1
                ? 'currentPage'
                : '' + (isMobile && 'mobile')
            }
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
    text-align: center;

    &.currentPage {
      color: red;
    }

    &:hover {
      cursor: pointer;
      background-color: lightgray;
    }

    &.mobile {
      font-size: 20px;
    }
  }
`;
