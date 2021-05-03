import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import headerMenus from './headerMenusData';
import StyledButtonUnit from '../Button';

function Menus({ history, isMobile, isMenuBarOpen }) {
  const moveToPage = (e) => {
    e.preventDefault();
    if (e.target.name === 'service') {
      history.push('/');
    } else if (e.target.name === 'signup') {
      history.push('/sign-up');
    } else if (e.target.name === 'login') {
      history.push('./login');
    }
  };

  return (
    <MenusWrapper
      className={isMobile && 'mobile'}
      isMenuBarOpen={isMenuBarOpen}
    >
      {headerMenus.map((menu) => {
        return (
          <HeaderButton
            key={menu.id}
            className={isMobile && 'mobile'}
            name={menu.name}
            value={menu.value}
            buttonText={menu.buttonText}
            onClick={moveToPage}
          />
        );
      })}
    </MenusWrapper>
  );
}

const MenusWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-top: 10px;

  &.mobile {
    display: ${(props) => (props.isMenuBarOpen ? 'block' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`;

const HeaderButton = styled(StyledButtonUnit)`
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin: 0 10px;

  &:focus {
    background-color: ${({ theme }) => theme.buttonBlue};
    color: white;
  }

  &.mobile {
    width: 100%;
    height: calc((100vh - 50px) / 3);
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    border-radius: 0;
  }
`;

export default withRouter(Menus);
