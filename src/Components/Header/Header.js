import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import useWindowSize from '../../hooks/windowSize';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/action';

export default function Header() {
  const dispatch = useDispatch();
  const userToken = useSelector((store) => store.loginReducer);

  console.log(userToken);

  const isMobile = useMediaQuery({
    query: '(max-width:414px)',
  });

  //   const { width } = useWindowSize();

  return <div>Header</div>;
}
