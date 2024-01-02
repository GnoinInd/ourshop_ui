import React from 'react'
import Productdata from '../Data/Productdata';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import orderpage from '../css/orderpage.css';
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector, Provider } from "react-redux";
import { addToCart } from '../redux/cartActions';
import Heart from "react-animated-heart";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistActions";
import { Link } from 'react-router-dom';






function Orderpage() {
  const [data, setData] = useState(Productdata);
  const [page, setPage] = useState(Productdata);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [wishlist, setWishlist] = useState(Array(data.length).fill(false));
  const wishlistItems = useSelector(state => state.wishlist.items);


  const selectProduct = Productdata.find(product => product.id === id);
  if (!selectProduct) {
    return <div><h1>Product is not found !</h1></div>;
  }
  // console.log(selectProduct);


  const buynow = () => {

  }
  const handletocart = (item) => {
    toast.success("Item Added To Your Cart !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch(addToCart(item));


  }
  const handleWishlistClick = (item) => {
    console.log(item)


    if (wishlistItems[item.id] == item.id) {
      // Item is already in the wishlist, remove it and show a success message
      dispatch(removeFromWishlist(item))
      setWishlist((prevWishlist) => {
        const newWishlist = { ...prevWishlist };
        delete newWishlist[item.id];
        return newWishlist;


      });
      toast.warning("Removed from your favorites!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      // Item is not in the wishlist, add it and show a success message
      dispatch(addToWishlist(item))
      setWishlist((prevWishlist) => ({
        ...prevWishlist,
        [item.id]: true,
      }));
      toast.success("Added to your favorites!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

  };

  return (
    <>
      <ToastContainer />
      {/* <div>Orderpage</div> */}

      <div className="orderpage">
        <div className="orderpage-img">
          <img src={selectProduct.image} />
          <span className="shop-wishlist-orderpage">

            <Heart isClick={wishlist[selectProduct.id] || false} onClick={() => handleWishlistClick(selectProduct)} />

          </span>
          <div className="orderpage-order">
        <div className="orderpage-order-addtocart">

          <button onClick={() => handletocart(selectProduct)} className="shopbtn" type="submit">Add to cart</button>
          <Link to={`/transactionpage/${selectProduct.id}`}>
          <button onClick={() => buynow()}>buy now</button>
          </Link>
        </div>
      </div>
        </div>
        
        <div className="orderpage-content">
          <div className="orderpage-rightpage">
            <div className="orderpage-name">
              <h3>{selectProduct.name}</h3>
              <h5>{selectProduct.title}</h5>
              <p>Special price</p>
            </div>

            <div className="orderpage-price">

              <p>₹{selectProduct.price}</p>
              <del>
                <p>₹{selectProduct.strikeprice}</p>
              </del>
            </div>
            <div className="orderpage-star-review">
              <p>{selectProduct.star}<FaStar />

              </p>
              <p>{selectProduct.review} reviews</p>
            </div>
            <div className="orderpage-extra-feature">
              <p><span>Size</span> {selectProduct.size}</p>
              <p><span>Color</span> {selectProduct.color}</p>
              <h4>{selectProduct.stock >= 1 ? 'in-stock' : 'out-of-stock'}</h4>
            </div>
          </div>


        </div>

      </div>

     

    </>
  )
}

export default Orderpage