import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

// import headerMenus from './headerMenusData';
import StyledButtonUnit from '../Button';

function Menus({ history, isMobile, isMenuBarOpen }) {
  const userToken = useSelector((store) => store.loginReducer);

  const moveToPage = (e) => {
    e.preventDefault();

    const moveTo = {
      service: '/',
      signup: '/sign-up',
      login: '/login',
      mypage: '/mypage/order',
      logout: '/logout',
    };

    history.push(moveTo[e.target.name]);
  };

  return (
    <MenusWrapper
      className={isMobile && 'mobile'}
      isMenuBarOpen={isMenuBarOpen}
    >
      {/* signup 페이지와 마찬가지로, buttonText가 다이나믹하게 변화해야 하므로 map 사용 x, 리팩토링시 고려하여 사용가능성 고려할 것 */}
      {/* {headerMenus.map((menu) => {
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
      })} */}
      <HeaderButton
        className={isMobile && 'mobile'}
        name={'service'}
        buttonText={'서비스'}
        onClick={moveToPage}
      />
      <HeaderButton
        className={isMobile && 'mobile'}
        name={userToken ? 'mypage' : 'signup'}
        buttonText={userToken ? '마이페이지' : '회원가입'}
        onClick={moveToPage}
      />
      <HeaderButton
        className={isMobile && 'mobile'}
        name={userToken ? 'logout' : 'login'}
        buttonText={userToken ? '로그아웃' : '로그인'}
        onClick={moveToPage}
      />
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
