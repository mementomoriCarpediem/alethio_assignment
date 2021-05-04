import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import useWindowSize from '../../hooks/windowSize';

import { FaBars } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/action';

import Logo from '../Logo';
import Menus from './Menus';

export default function Header() {
  const dispatch = useDispatch();

  const { width } = useWindowSize();

  const isMobile = useMediaQuery({
    query: '(max-width:414px)',
  });

  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  return (
    <HeaderWrapper className={isMobile && 'mobile'}>
      <div>
        <Logo
          className={isMobile && 'mobile'}
          width={isMobile ? '150px' : '200px'}
        />
        {isMobile && (
          <FaBars
            size={35}
            color={'gray'}
            onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}
          />
        )}
      </div>
      <Menus isMobile={isMobile} isMenuBarOpen={isMenuBarOpen} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
  }

  &.mobile {
    flex-direction: column;
    padding: 10px;
  }
`;
