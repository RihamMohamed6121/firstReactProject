
import qs from "query-string";

import React, { Component } from 'react';
class ProductDetails extends Component {
    state = {  } 
    
    save =() =>{
        this.props.history.replace("/cart");
    };

    render() { 
        const res=qs.parse(this.props.location.search);
        //console.log(this.props.match.params.id);
        const product=this.props.products.filter(c => c.id ===parseInt(this.props.match.params.id))[0];
        return ( <React.Fragment>
         <h1>Details</h1>
         <h1>product name:{product.name}</h1>
         <h1>number in shopping cart:{product.count}</h1>
         <button onClick={this.save} className="btn btn-primary btn-sm">save</button>
    
        </React.Fragment>
        
        
    
        );
    }
}
 
export default ProductDetails;

