import React, { Component } from 'react';
import CartItem from './CartItem'
import Store from '../../store'

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            items: []
        }
    }

    addItem() {
        Store.dispatch({ type: 'INCREMENT' });

        var items = this.state.items;
        var counter = this.state.counter+1;
        items.push(counter);
        this.setState({item: items, counter: counter});
    }

    removeItem(index) {
        var counter = this.state.counter;
        this.setState({counter: counter-1});
    }

    render() {
        var items = [];
        for (var i = 0; i < this.state.counter; i++) {
            items.push(<CartItem index={i} key={i} onRemove={this.removeItem.bind(this)} />);
        };
        return (
            <div>
                <div>
                    <button onClick={this.addItem.bind(this)}>Add item</button>
                </div>
                {items}
            </div>
        );
    }
}

export default Cart;
