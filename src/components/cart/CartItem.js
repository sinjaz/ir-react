import React from 'react';

class CartItem extends React.Component {
    render() {
        return <div>
            <span>Item {this.props.index}</span>
            <button onClick={()=>this.props.onRemove(this.props.index)}>Remove me</button>
        </div>
    }
}

export default CartItem;
