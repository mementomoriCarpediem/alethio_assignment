const headerMenusData = {
  withoutUserToken: [
    { id: 1, name: 'service', buttonText: '서비스', pageTo: '/' },
    { id: 2, name: 'signup', buttonText: '회원가입', pageTo: '/sign-up' },
    { id: 3, name: 'login', buttonText: '로그인', pageTo: '/login' },
  ],

  withUserToken: [
    { id: 1, name: 'service', buttonText: '서비스', pageTo: '/' },
    {
      id: 2,
      name: 'mypage',
      buttonText: '마이페이지',
      pageTo: '/mypage/order',
    },
    { id: 3, name: 'logout', buttonText: '로그아웃', pageTo: '/logout' },
  ],
};

export default headerMenusData;
