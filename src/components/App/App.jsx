import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css'




export default class App extends Component {

    state = {
        todoData: [
            { id: 1, label: 'Drink Cofee', important: false },
            { id: 2, label: 'Drink Tea', important: true },
            { id: 3, label: 'Drink Milk', important: false }
        ]
    };

deleteItem = (id) => {
    this.setState( ({ todoData }) => {

        const idx = todoData.findIndex( (el) => el.id === id );
        console.log(idx);

        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx + 1);

        const newArray = [ ...before, ...after ]

        return{
            todoData: newArray
        }

    })
};

    // const isLoggedIn = true;
    // const loginBox = <span>Log in please!</span>;
    // const welcomeBox = <span>Welcome Back!</span>

    render() {


        return (
            <div className='todo-app' >
                {/* { isLoggedIn ? welcomeBox : loginBox } */}
                < AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
            </div>
        );
    }
};