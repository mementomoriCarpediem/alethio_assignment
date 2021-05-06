import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { FaBars } from 'react-icons/fa';

import { isMobile_mediaQuery } from '../../config';

import Logo from '../Logo';
import Menus from './Menus';

export default function Header() {
  const isMobile = useMediaQuery({
    query: `${isMobile_mediaQuery}`,
  });

  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  return (
    <HeaderWrapper className={isMobile && 'mobile'}>
      <div>
        <Logo
          className={isMobile && 'mobile'}
          width={isMobile ? '150px' : '200px'}
          url={'/images/logo.png'}
          alt={'companyLogo'}
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
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  width: 100%;
  background-color: white;

  div {
    display: flex;
    justify-content: space-between;
  }

  &.mobile {
    flex-direction: column;
    padding: 10px;
  }
`;
