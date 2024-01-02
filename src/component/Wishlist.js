import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Productdata from '../Data/Productdata';
import { Store } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import Heart from "react-animated-heart";
import Data from '../Data/Data';
import '../css/wishlist.css';

import { useNavigate } from "react-router-dom";

import { addToWishlist, removeFromWishlist } from '../redux/wishlistActions';



function Wishlist() {

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  console.log(wishlistItems)

  const handleremoveFromWishlist = (item) => {

    dispatch(removeFromWishlist(item));
    // toast.error("Remove Product from wishlist cart !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

  };


  return (
    <>
      <div>Wishlist</div>
      <p className="mb-0">You have {wishlistItems.length} items in your wishlist</p>

      <div>
        {wishlistItems.map((data) => {
          return (
            <div key={data.id} className="wishlist-wishlist">
              <div className="wishlist-data">
                <div className="wishlist-image">
                  <img src={data.image} alt={data.title} />


                </div>
                <p>{data.title}</p>
                <div className="wishlist-button">
                  <button onClick={() => handleremoveFromWishlist(data)}>
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default Wishlist