import React, { Component } from 'react';
import NavBar from './navbar';
import Shoppingcart from './shoppingcart';
import {Route,Redirect} from "react-router-dom";
import About from './about';
import Contact from './contact';
import Home from './home';
import ProductDetails from './productDetails';
import NotFound from './pagenotfound';
import Menu from './components/menu';
import Footer from './footer';
class App extends Component {
    state = { 
        products:[
            {id:1 ,name:'Beef Burger ',count:1, price:30,isincart: false},
            {id:2 ,name:'chicken Burger ',count:2, price:30,isincart: false},
            {id:3 ,name:'extra mushroom',count:3, price:5,isincart: false},
            {id:4 ,name:'extra lettus ',count:3, price:3,isincart: false},
            {id:5 ,name:'extra cheese ',count:3, price:3,isincart: false},
            {id:6 ,name:'extra tomato ',count:3, price:3,isincart: false},
            {id:7 ,name:'extra onion ',count:3, price:3,isincart: false},
            {id:8 ,name:'ketchup ',count:3, price:5,isincart: false},
            {id:9 ,name:'ranch ',count:3, price:5,isincart: false},
            {id:10 ,name:'BBQ ',count:3, price:5,isincart: false},
            {id:11 ,name:'cola ',count:3, price:10,isincart: false},
            {id:12 ,name:'sprite ',count:3, price:10,isincart: false},
            {id:13 ,name:'fanta ',count:3, price:10,isincart: false},
            {id:14 ,name:'water ',count:3, price:5,isincart: false}
        ]
     };
     delete= Product =>{
        const products=this.state.products.filter((p)=>p.id!==Product.id);
        this.setState({products});
    };
    reset=()=>{
        let products=[...this.state.products];
        products.map(p =>{
            p.count=0;
            return p;
        });
        this.setState({products});

    };
    increment=Product=>{
        const products=[...this.state.products];
        const index=products.indexOf(Product);
        products[index]={...products[index]};

        products[index].count++;
        this.setState({products});
    };
    cartchange=Product=>{
        const products=[...this.state.products];
        const index=products.indexOf(Product);
        products[index]={...products[index]};

        products[index].isincart=!products[index].isincart;
        this.setState({products});

    };
 
    render() { 
        return (
            <React.Fragment>
                <NavBar productscount={this.state.products.filter(p => p.count>0&& p.isincart).length}/>
                {/*<main className='container'>
                   <Shoppingcart products={this.state.products} onIncrement={this.increment} onDelete={this.delete} onReset={this.reset}/>
                    </main>*/}
                   
                    
                    <Route path="/cart" render={props => (
                        <Shoppingcart products={this.state.products.filter(p => p.isincart)} onIncrement={this.increment} onDelete={this.cartchange} onReset={this.reset} {...props}/>
                    )}/>
                    <Route path="/home" component={() => (<Home/>)}/>
                    <Route path="/about" component={() => (<About/>)}/>
                    <Route path="/contact" component={() => (<Contact/>)}/>
                    <Route path="/products/:id" render={props => (<ProductDetails products={this.state.products} {...props}/>)}/>
                    <Route path="/notfound" component={() => (<NotFound/>)}/>
                    <Redirect to="/notfound" />
                    <Route path="/menu" render={props => (<Menu {...props} products={this.state.products} onClick={this.cartchange}/>)}/>
                    
                    <Footer/>
                
            </React.Fragment>
        );
    }
}
 
export default App;