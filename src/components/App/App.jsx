import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css'




const App = () => {

    const todoData = [ 
        {id: 1, label: 'Drink Cofee', important: false},
        {id: 2, label: 'Drink Tea', important: true},
        {id: 3, label: 'Drink Milk', important: false}
    ];

    // const isLoggedIn = true;
    // const loginBox = <span>Log in please!</span>;
    // const welcomeBox = <span>Welcome Back!</span>

    return ( 
        <div className='todo-app'>
            {/* { isLoggedIn ? welcomeBox : loginBox } */}
            <AppHeader toDo={1} done={3}/> 
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={ todoData }/>
        </div>
    );
};

export default App;