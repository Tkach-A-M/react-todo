import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm'

import './App.css'





export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Drink Tea'),
            this.createTodoItem('Drink Milk')
        ]
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);
            console.log(idx);

            // array before item
            const before = todoData.slice(0, idx);

            //array after item
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after]

            return {
                todoData: newArray
            }

        })
    };

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newArray = [...todoData, this.createTodoItem(text)];
            return {
                todoData: newArray
            };
        })
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((arr) => arr.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        console.log('toggle important', id);
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        console.log('toggle done', id);
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    // const isLoggedIn = true;
    // const loginBox = <span>Log in please!</span>;
    // const welcomeBox = <span>Welcome Back!</span>

    render() {

        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app' >
                {/* { isLoggedIn ? welcomeBox : loginBox } */}
                < AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
};