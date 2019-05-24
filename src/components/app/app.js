import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

const App = () => {

  const todoData = [
    {label: 'Drink Cofee', important: false, id:1},
    {label: 'Make Awesome App', important: true, id:2},
    {label: 'Have a lunch', important: false, id:3},
  ];

  return(
    <div className="todo-app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)}/>
    </div>
  )
};

export default  App;
