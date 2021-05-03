import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Service from './Pages/Service/Service';
import MyPage from './Pages/MyPage/MyPage';
import MyPageDetail from './Pages/MyPage/MyPageDetail/MyPageDetail';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Service} />
        <Route exact path={'/sign-up'} component={SignUp} />
        <Route exact path={'/login'} component={SignIn} />
        <Route exact path={'/mypage/order'} component={MyPage} />
        <Route exact path={'/mypage/order/:id'} component={MyPageDetail} />
      </Switch>
    </Router>
  );
}
