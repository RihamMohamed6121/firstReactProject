import React, { Component } from 'react';
import { Link ,NavLink} from 'react-router-dom';


    const NavBar = props => {
        return (  
        <nav className='navbar navbar-light bg-light'>
        <a className="navbar-brand" href="#">Burger and Fries</a>
        
        <ul className='nav nav-tabs' >
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/home"> Home </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/contact"> Contact </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/menu"> Menu </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/cart"> Shopping cart </NavLink>
                </li>


            </ul>

        
        <span className='m-3'>items {props.productscount}</span>
    </nav> );
    };
     
    

 
export default NavBar;

