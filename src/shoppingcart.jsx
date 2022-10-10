import React, { Component } from 'react';
import Product from './product';


class Shoppingcart extends Component {

  
     
    render() { 
        return (
        <React.Fragment>
            <div>
            <h1>Shopping cart</h1>
            <button className='btn btn-secondary btn-sm m-2' onClick={this.props.onReset}>Reset</button>
            {this.props.products.map(product =>
               ( <Product key={product.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} Product={product}/>))}
           </div>       
        </React.Fragment>);

    }
}
 
export default Shoppingcart;