import React from 'react';
import './TodoListItem.css'

const TodoListItem = ( { label, important = false } ) => {
    
    const liStyle = {
        color: important ? 'tomato' : 'balck',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className='todo-list-item'>
            
            <span className="todo-list-item-label" style={liStyle}>{ label }</span>

            <button type='button' className='btn btn-outline-success btn-sm float-right'>
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>

        </span>


    );
}

export default TodoListItem;