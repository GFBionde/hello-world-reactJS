import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* 
  Aqui é específicado o elemento da DOM que será controlado pelo React. 
  Neste caso, o elemento 'root' (div no arquivo index.html, com o id='root').

  Dessa forma, o componente 'app' representa a view que vimos no browser.
*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
