import React, { useCallback, useState, useEffect, Fragment, useImperativeHandle, useContext } from "react";
import "./Shop.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import product_card from './productdata';
import { Button } from "react-bootstrap";
import AddCart from "./Cart/AddCart";
import DeleteItem from "./Cart/DeleteItem";
import ItemPage from "../ItemPage/ItemPage";
import axios from 'axios';
// import '../ItemPage/ItemPage.css';




const Shop = () => {
    const [shopItemList,setShopItemList]=useState([]);
    const [shopSingleItemList,setShopSingleItemList]=useState([]);
    const [currentHoverButtonType, setCurrentHoverButtonType] = useState("");
    // const contextValue = useContext(context);
    // const { } = contextValue;
    const [cart, setCart] = useState([]);
    const handleGetItem = () => {
        let results;
        axios.get("http://localhost:3400/shop/product_display")
          .then(function (response) {
            results = response.data;
            console.log("reults1",results);
            setShopSingleItemList(results);

            console.log('shopSingleItemList', shopSingleItemList)
            var newResults = results.filter((item)=>{
                return item.pColor==="Black" && item.pSize =="S"||item.pSize ==null;
            });
            console.log('newResults', newResults)

            setShopItemList(newResults);
            console.log()
            })
            .catch((error) => {
            console.log("shop_display_error", error);
            });

            console.log("hello");
        };
        useEffect(()=>{
            console.log("hello2");
            handleGetItem();
          },[])
        return (
            <Provider value={{
                cart: cart,
                setCart: setCart,
            }}> {/*passing value to grandChilds*/}
            <div className={`shop_container shopScss`}>

                <button className="nav_cart" >{cart.length}</button>
                <div className="shopping-cart" style={{ display: cart.length === 0 ? 'none' : 'block' }}>
                    {cart.map(item => <DeleteItem
                        setCart={setCart}
                        item={item}
                        cart={cart} />)}
                    <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">Total:
                        </div>
                        <div className="check-out">
                        <Button className="check-out-button" variant="success">Check out</Button>
                        </div>
                    </div>
                </div>
                <div class="product-all" >
                    <div className="product_header">
                    </div>

 

                    <div className="product-container">


                        <Fragment>
                            {shopItemList.map(item => <AddCart
                                item={item}
                                cart={cart}
                                setCart={setCart} 
                                itemImage={item.pImage}/>)}
                        </Fragment>


                    </div>

                </div>
                
                
            </div>
        
            </Provider>
    );


};

export default Shop;

