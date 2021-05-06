import { useState, useEffect } from 'react';

export default function useGetOrderData(endpoint) {
  const [isLoading, setIsLoading] = useState(false);

  const [productList, setProductList] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getOrderData(currentPage);
  }, [currentPage]);

  const getOrderData = async (currentPage) => {
    await fetch(`${endpoint}/order?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data.totalPages);
        setProductList([...data.content]);
      });
    await setIsLoading(false);
  };

  return [isLoading, productList, totalPage, currentPage, setCurrentPage];
}
