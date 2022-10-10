import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {
   // state = { 
     //   name:this.props.Product.name,
       // count:this.props.Product.count,
       // img:"logo192.png",
        /*names:["ali","sara","ahmed"]*/
     //};
     func = () => {
        let classes;
        if(this.props.Product.count===0){
            classes="badge badge-warning m-2";
        }else{
            classes="badge badge-primary m-2";
        }
     }
     /*incrementHandler=()=>{
        this.increment(2)
     }*/
     /*increment= () =>{
        this.setState({count:this.props.Product.count+1});
     }*/
    render() { 
       
        return (
            <div className='row'>
                <div className='col-1'><Link to={'/products/2'}>{this.props.Product.name}</Link></div>
                <div className='col'>
                <span className='m-3'>{this.props.Product.count}</span>
                 <button onClick={() => this.props.onIncrement(this.props.Product)} className='btn btn-primary btn-sm'>+</button>
                 <button style={{cursor:"pointer"}} onClick={() => this.props.onDelete(this.props.Product)} className='btn btn-secondary btn-sm m-2'>delete</button>
                </div>
               {/*<img src={this.state.img} alt="" />*/}
                 
                 
                
               {/* <ul>
                    {this.state.names.map(name=><li key={name}>{name}</li>)}
                </ul>*/}
            </div>
        );
    }
}
 
export default Product;
