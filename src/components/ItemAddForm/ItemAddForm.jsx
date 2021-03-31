import React from 'react';
import './ItemAddForm.css';

export default class AddItem extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    // add item
    //click Enter or left mouse key
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className='itemAddForm d-flex' onSubmit={this.onSubmit}>
                <input type='text' className='form-control' onChange={this.onLabelChange} placeholder='type to add' 
                //to clear input after added
                value={this.state.label}/>
                <button className='btn btn-outline-secondary'>AddItem</button>
            </form>
        );
    }
}

