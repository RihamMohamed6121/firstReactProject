import React from 'react';
import Product from './../product';
import Cart from './../cart';

const Menu = props => {
    return ( 
        <React.Fragment>
            <h1>Menu</h1>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        props.products.map(Product => (
                            <tr>
                                <td>{Product.name}</td>
                                <td>{Product.price}</td>
                                <td><Cart onClick={props.onClick} Product={Product}/></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </React.Fragment>
     );
}
 
export default Menu;