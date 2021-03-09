import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;