import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Item from '../component/Item'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { addToCart } from "../redux/cartActions";
import { store } from "../redux/store";
import Singlepage from '../RedirectPage/Singlepage'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import Productdata from '../Data/Productdata';
import { GrAid } from "react-icons/gr";





const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();



    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems.length)
    // const dispatch = useDispatch();
    return (
        <div className="Navbar">
            <img alt="Logo" className='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' />
            {auth ? <ul className='nav-ul'>
                <li className='leftHome'><Link to="/">Home</Link></li>

                <div className='nav-profile'>

                    <li className='rightside'><Link to="/profile">

                        <CgProfile /></Link></li>
                </div>
                <div className='add-to-cart'>

                    <li className='rightside'><Link to="/singlepage"><FaCartShopping />
                        <span className="addtocart-quality">{cartItems.length}</span></Link>
                    </li>
                </div>
                <li className='rightside'><Link to="/createshop"><GrAid />

                    AddShop</Link></li>

                <Item />


                {/* <li className='rightside'><Link onClick={logout} to="/signup">Logout</Link></li> */}
            </ul>

                :
                <ul className='nav-ul'>

                    {/* <li><Link to="/signup">Signup</Link></li> */}
                    <li className='rightside'><Link to="/login">Login</Link></li>

                </ul>
            }




        </div >

    )
}
export default Nav;