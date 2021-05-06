import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import headerMenusData from './headerMenusData';
import StyledButtonUnit from '../Button';

function Menus({ history, isMobile, isMenuBarOpen }) {
  const userToken = useSelector((store) => store.loginReducer);
  const [selectedMenuArray, setSelectedMenuArray] = useState([]);

  useEffect(() => {
    setSelectedMenuArray(() =>
      userToken
        ? [...headerMenusData.withUserToken]
        : [...headerMenusData.withoutUserToken],
    );
  }, [userToken]);

  const moveToPage = (e) => {
    e.preventDefault();

    const moveTo = {
      service: selectedMenuArray[0].pageTo,
      signup: selectedMenuArray[1].pageTo,
      login: selectedMenuArray[2].pageTo,
      mypage: selectedMenuArray[1].pageTo,
      logout: selectedMenuArray[2].pageTo,
    };

    history.push(moveTo[e.target.name]);
  };

  return (
    <MenusWrapper
      className={isMobile && 'mobile'}
      isMenuBarOpen={isMenuBarOpen}
    >
      {selectedMenuArray.map((menu) => {
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
  margin: 0 10px;
  color: black;
  font-size: 15px;
  font-weight: 600;

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
