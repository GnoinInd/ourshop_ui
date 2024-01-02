import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Productdata from '../Data/Productdata';
import { useState } from 'react';
import { addToOrder } from '../redux/orderpageActions';
import { Store } from 'redux';






function Yourorder() {

  
  const orederitem = useSelector((state) => state. orderitems.items);
  console.log(orederitem)
  return (
    <>
      <div>Yourorder</div>
      {orederitem.map((data) => {
        return(
        <diV>
           <p className="mb-0">You have {orederitem.length} items in your wishlist</p>
           <h1>{data.name}</h1>
           <h1>{data.title}</h1>
           <h1>{data.price}</h1>
        </diV>  
        )
      
      }
      )
      }
      {/* <h1>{orderitem.name}</h1> */}
     
    </>
  )
}

export default Yourorder;