import { useState, useEffect } from 'react';

export default function useGetDetailPageData(props, endpoint) {
  const { id } = props.match.params;
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductDetailData(id);
  }, [id]);

  const getProductDetailData = async (id) => {
    await fetch(`${endpoint}/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail([data]);
      });
  };
  return [productDetail];
}
