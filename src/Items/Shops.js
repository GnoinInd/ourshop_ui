import React from 'react';
import Data from '../Data/Data';
import Productdata from '../Data/Productdata'
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Shop.css';
import Singlepage from '../RedirectPage/Singlepage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Orderpage from '../component/Orderpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector, Provider } from "react-redux";
import { addToCart } from '../redux/cartActions';
import { addToWishlist, removeFromWishlist } from "../redux/wishlistActions";

import { FaHeart } from "react-icons/fa";
import Heart from "react-animated-heart";
// import Animationheart from '../component/Animationheart';



const Shops = () => {


    const [value, setValue] = useState(Productdata);
    const [data, setData] = useState(Productdata);


    const [wishlist, setWishlist] = useState(Array(data.length).fill(false));



    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(value)
    const wishlistItems = useSelector(state => state.wishlist.items);
    
    // console.log(wishlist)
    const { _id } = useParams();
    // console.log(id)
    // Find the product with the matching id
    const selectedProduct = Data.find(product => product._id === _id);
    // console.log(selectedProduct);

    if (!selectedProduct) {
        return <div><h1>Shop is not found !</h1></div>;
    }



    const clickfunc = (filtr) => {
        const updateItems = Productdata.filter((item) => item.category === filtr);
        setData(updateItems);
        return updateItems;
    };



    const handletocart = (item) => {
        dispatch(addToCart(item));
        toast.success("Item Added To Your Cart !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    // const star = data.Review.map(review => review.star);

    // handletocart = (item) => {
    //     (addToCart(item>2));
    //     toast.warning("Your Item Already Added To Your Cart !", {
    //         position: toast.POSITION.TOP_middle,
    //     });
    // }
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
       
    
    
//  console.log(wishlistItems)




    return (
        <>
            <div className='mycontainer'>
                <ToastContainer />
                <div className="shop-image-slidebar">
                    <img src={selectedProduct.image}></img>

                </div>
                <h4>{selectedProduct.Name}</h4>
                <div className="shop-title-2">
                    <h5>Inspiration for your first order</h5>
                </div>
                <div className="shop-details-data">
                    <div className="shop-detail" >
                        <div className="shopdetail-img">
                            <img src="https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_640.jpg" ClassName="img-fluid" />
                        </div>
                        <button onClick={() => clickfunc('fashion')}>Fashion</button>
                        {/* <Link value={"fashion"}>Fashion</Link> */}




                    </div>

                    <div className="shop-detail" >
                        <div className="shopdetail-img">
                            <img src="https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274360_640.jpg" ClassName="img-fluid" />
                        </div>

                        {/* <Link value={"cloths"} to="">Cloths</Link> */}
                        <button onClick={() => clickfunc('cloths')} >Cloths</button>


                    </div>

                    <div className="shop-detail" >
                        <div className="shopdetail-img">
                            <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_640.jpg" ClassName="img-fluid" />
                        </div>

                        {/* <Link value={"electronics"} to="">Electronics</Link> */}
                        <button onClick={() => clickfunc('electronics')} >Electronics</button>

                    </div>

                    <div className="shop-detail" >
                        <div className="shopdetail-img">
                            <img src="https://cdn.pixabay.com/photo/2016/11/06/02/51/all-1802150_640.jpg" ClassName="img-fluid" />
                        </div>

                        {/* <Link value={"electronics"} to="">Electronics</Link> */}
                        <button onClick={() => setData(Productdata)} >All</button>

                    </div>

                </div>
                <div className="shop-title-2">
                    <h5>Best item in {selectedProduct.Name}</h5>
                </div>



            </div>

            <div className='mycontainer'>
                <div className='myrow'>
                    {data.map((data, index) => (
                        <div key={index} className="Shop-sndsections mycol mycol-3">
                            <div className="Shop-sndsection">
                                <div className="shop-sndsection-img">
                                    <img src={data.image}
                                        alt={data.title} />
                                    <span className="shop-wishlist ">
                                        {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
                                        <Heart isClick={wishlist[data.id] || false} onClick={() => handleWishlistClick(data)} />

                                    </span>

                                </div>
                                <div className="shop-title">
                                    <h3>{data.name}</h3>
                                    <p>
                                        MRP: ₹
                                        <del>{data.strikeprice}</del>
                                    </p>
                                    <h2>Special price: ₹{data.price}</h2>
                                    {/* <span>{star}</span> */}
                                    <h4>You are Ready</h4>
                                </div>
                                <div className="Shop-button">

                                    <Link to={`/orderpage/${data.id}`} >
                                    {/* <Link to="/orderpage:id" > */}
                                        <button type="submit">View Product</button>
                                    </Link>

                                    <button onClick={() => handletocart(data)} className="shopbtn-2" type="submit">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>

    )




}

export default Shops;