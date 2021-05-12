
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/todoList'
console.log(Store);
ReactDOM.render(
<App todoList={Store}  />, 
document.getElementById('root'));