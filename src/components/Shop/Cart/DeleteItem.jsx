 import Image from 'react-bootstrap/Image';
import "./Cart.css";
import { Button } from "react-bootstrap";
import { useState , useContext } from 'react';
import Add_Cart from './AddCart';
import Shop from '../Shop';
import context,{Provider} from '../../context'; //sugar


const DeleteItem = ({ item }) => {
    const cart = useContext(context).cart;
    const setCart = useContext(context).setCart;
    const [itemCount, setItemCount] = useState(1);
    //cart.length

    const DeleteThis = ( ) => {
        console.log(item); 
        console.log(cart)
        setCart(cart.filter(cartItem => item.pId !== cartItem.pId))
        console.log(item.pId)

    }
    
    // console.log('item',item);
    return (
        
        <>
            {/* <Provider value={contextValue}> */}

            <div className="shopping-info" >
                <div className="item-name">{item.pName}</div>
                <Image className="item-image" src={item.pImage}></Image>
                <div className="item-price">{item.pPrize}</div>
                <div className="amountCounter">
                <input name="preferance" value="-" type="submit" className="border-0 minus" disabled={itemCount ==1 ? 'disable':''} onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                    }} />
                    <span className="qty-no" >{itemCount}</span>
                    {item >= 1 && item !=0  }
                    <input name="preferance" value="+" type="submit" className="border-0 plus" disabled={itemCount==item.pAmount?'disable':''} onClick={() => {
                        setItemCount(itemCount + 1 , 25);
                    }} />
                </div>
                <Button className="shopping-cart-button" variant="danger" onClick={DeleteThis}>Delete</Button>
            </div>
            {/* </Provider> */}

        </>   
      

    )
}




export default DeleteItem;