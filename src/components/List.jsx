import React, { Component } from 'react';

class List extends Component {
    state = {  }
    render() { 
        let items = []
        for(let i = 0; i < this.props.items.length; i++) {
            items.push(<li>{this.props.items[i]}</li>)
        }
        return ( 
            <div>
                {items}
            </div>
         );
    }
}
 
export default List;