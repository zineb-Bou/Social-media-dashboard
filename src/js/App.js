import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import Header from './components/header';
const App = () => (
  <>
    <Header />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));
