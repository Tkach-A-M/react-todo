import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter';




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



ReactDOM.render(<App/>, document.getElementById('root'));