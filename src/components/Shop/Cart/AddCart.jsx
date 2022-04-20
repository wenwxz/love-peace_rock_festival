// import React, { useCallback, useState, useEffect, Fragment, useImperativeHandle, useContext } from "react";
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, } from "react-router-dom";
import Product_card from '../productdata';
import { createContext, useReducer,useState } from 'react';
// import try01 from '../shopImage/LoOpener.png'
import './Cart.css'
//if got css problem here is the answer



const Add_Cart = ({ item, cart, setCart ,itemImage}) => {
    // const contextValue = useContext(context);
    // const { } = contextValue;

    const addToCart = (evt) => {
        // console.log(evt);
        setCart([...cart , item])
        // console.log([...cart,item])
        console.log('cart',cart)
        // console.log('item:', item) //showing what i clicked >item
    }
// console.log(item)
    
   
   

    return (
        <div className='cart-list'>
            {/* showing all items in shop */}
            <div className="product-box" key={item.pIndex}>
                <div className="product-img">
                <Link to={`/shop/${item.pName}`}>
                <img src={itemImage}></img>
                </Link>
            </div>
                <div className="cart_button">
                    <button className="cartbutton" onClick={()=>addToCart(item)}><FaShoppingCart/></button>
                    {/* <button className="listbutton"><FaRegHeart/></button> */}
                </div>


                <div className="product-details">
                    <h6>{item.pName}</h6>
                    <h6><strong>${item.pPrize}</strong></h6>
                </div>
            </div>
        </div>

    )
}

export default Add_Cart;