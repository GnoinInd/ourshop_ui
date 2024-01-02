import React from 'react';
import { Link } from 'react-router-dom';
import '../css/item.css'
import Mobile from '../Items/Mobile';


const Item = () => {

    return (
       
        <div>
            
            {/* <li>  Services
                <ul className="drop-down">.
                    <div className="drop-down-hidden">
                        <Link to="#">   Portfolio  </Link>
                        <Link to="#">   Portfolio  </Link>
                        <Link to="#">   Portfolio  </Link>
                        <Link to="#">   Portfolio  </Link>
                    </div>
                </ul>
            </li> */}
            <div className="dropdown">
                <button className="dropbtn">item
                    <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    {/* <div class="header">
                    <h2>Mega Menu</h2>
                </div> */}
                    <div className="row">
                        <div className="column">
                            <div ClassName="img-div">
                                <img src="https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_640.jpg" className='img-fluid'></img>
                            </div>
                            <h3>Fashion</h3>
                            <Link to="/tshirts">T-shirts</Link>
                            <Link to="/jeans">Jeans</Link>
                            <Link to="/kurta">Kurta</Link>
                        </div>
                        <div className="column">
                            <div ClassName="img-div">
                                <img src="https://media.istockphoto.com/id/1413199830/photo/happy-mother-and-daughter-reading-product-information-while-shopping-at-supermarket.jpg?s=2048x2048&w=is&k=20&c=A9Q52oDkkJXlX2_Q4AMKn6mTnGDqUl4d30dZ5le7Tcg=" className='img-fluid'></img>
                            </div>
                            <h3>Grocery</h3>

                            <Link to="/grocery">Grocery</Link>

                        </div>
                        <div class="column">
                            <div ClassName="img-div">
                                <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_640.jpg" className='img-fluid'></img>
                            </div>
                            <h3>Electronics</h3>
                            <Link to="/mobile">Mobile</Link>
                            {/* <Mobile /> */}
                            <Link to="laptop">Laptop</Link>
                            <Link to="desktop">Desktop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Item;