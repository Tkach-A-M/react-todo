import React from 'react';
import './TodoListItem.css'


export default class TodoListItem extends React.Component {
    render() {

        const { label, important = false } = this.props;

        const liStyle = {
            color: important ? 'steelblue' : 'balck',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <span className='todo-list-item'>

                <span className="todo-list-item-label" style={liStyle}>{label}</span>

                <button type='button' className='btn btn-outline-success btn-sm float-right'>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>

            </span>


        );
    }
}