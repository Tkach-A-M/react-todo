import React from 'react';
import './ItemAddForm.css';

export default class AddItem extends React.Component{


    render(){
        return(
            <div className='itemAddForm'>
                <button className='btn btn-outline-secondary' 
                onClick={() => this.props.onItemAdded('Hello World!')}>AddItem</button>
            </div>
        );
    }
}

