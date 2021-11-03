import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import Header from './components/header';
import Main from './components/main';
const App = () => (
  <>
    <Header />
    <Main />
  </>
);
ReactDOM.render(<App />, document.querySelector('#root'));
