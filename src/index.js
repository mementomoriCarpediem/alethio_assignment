import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/themes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
