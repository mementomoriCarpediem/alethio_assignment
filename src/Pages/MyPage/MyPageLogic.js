import { useState, useEffect, useCallback } from 'react';

export default function useGetOrderData(endpoint) {
  const [isLoading, setIsLoading] = useState(false);

  const [productList, setProductList] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const getOrderData = useCallback(async () => {
    await fetch(`${endpoint}/order?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data.totalPages);
        setProductList([...data.content]);
      });
    await setIsLoading(false);
  }, [currentPage, endpoint]);

  useEffect(() => {
    setIsLoading(true);
    getOrderData();
  }, [getOrderData]);

  return [isLoading, productList, totalPage, currentPage, setCurrentPage];
}
