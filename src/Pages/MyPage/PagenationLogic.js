import { useState, useEffect } from 'react';

export default function usePageMove(totalPage) {
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
  return [pageArray];
}
