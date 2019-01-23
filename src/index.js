import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './toDoApp.js';


var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});


ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('root'));
