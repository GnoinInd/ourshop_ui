import React from 'react';
// import {useSelector,useDispatch,Provider,connect} from 'react-redux'

// import { FaCartShopping } from "react-icons/fa6";
// import { Link } from 'react-router-dom'
import { useState } from 'react';
import Productdata from '../Data/Productdata';
import { Store } from 'redux';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, DecreaseCart } from '../redux/cartActions';
import '../css/singlepage.css';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



const Singlepage = () => {
    // const [value, setValue] = useState('')

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
        toast.error("Remove Product from shoping cart !", {
            position: toast.POSITION.TOP_CENTER,
        });
    };
    const handleDecreaseCart = (item) => {
        dispatch(DecreaseCart(item));
    };
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

    };

    const Subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



    var priceWithoutTax = (
        cartItems.reduce((total, item) => total + (parseFloat(item.quantity) * parseFloat(item.mrp)), 0).toFixed(2)
    );
    var estimatedTax = ((priceWithoutTax * 0.05).toFixed(2));
    var finalPrice = ((parseFloat(priceWithoutTax) + parseFloat(estimatedTax)).toFixed(2));

    return (
        <>
            <ToastContainer />
            <div>
                <p className="mb-1">Shopping cart</p>
                <p className="mb-0">You have {cartItems.length} items in your cart</p>
            </div>
            {cartItems.map((data) => {
                return (

                    <div className="addtocartpagesingle" key={data.id}>
                        <div className="addtocart-image">
                            <img src={data.image}></img>
                        </div>
                        <div>
                            {/* <p>{data.name}</p> */}
                            <p>{data.title}</p>
                        </div>

                        <div className="addtocart-button">
                            {data.quantity >= 2 &&
                                <button onClick={() => handleDecreaseCart(data)}>-</button>
                            }
                            <button>{data.quantity}</button>
                            <button onClick={() => handleAddToCart(data)}>+</button>


                        </div>
                        <div className="addtocart-delete">
                            <span>originalprice:{data.price}({data.price * data.quantity})</span>
                            <button onClick={() => handleRemoveFromCart(data)}>Remove</button>
                        </div>
                    </div>
                );
            })}

            <div className="addtocart-totalprice">
                <span>Total Price of your Cart</span>
                <span> Rs={Subtotal}</span>
            </div>
            <div>
                <ul>
                    <Link to="">Continue to Shoping</Link>
                </ul>
            </div>
        </>
    )
}
export default Singlepage;
