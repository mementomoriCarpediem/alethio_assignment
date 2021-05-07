import { useState, useEffect, useCallback } from 'react';

export default function useGetDetailPageData(props, endpoint) {
  const { id } = props.match.params;
  const [productDetail, setProductDetail] = useState([]);

  const getProductDetailData = useCallback(async () => {
    await fetch(`${endpoint}/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail([data]);
      });
  }, [endpoint, id]);

  useEffect(() => {
    getProductDetailData();
  }, [getProductDetailData]);

  return [productDetail];
}
