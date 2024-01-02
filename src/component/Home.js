import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'
// import Addshopdata from '../Data/Addshopdata';
// import Data from '../Data/Data';
import { useState } from 'react';
import { useEffect } from 'react';
import Slideshow from './Slideshow';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import image from '../../../backend/image'





const Home = () => {

    const [value, setValue] = useState("");
    const [valuecity, setValuecity] = useState("");
    const [Name, setName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [city, setCity] = React.useState('');
    const [image, setImage] = React.useState('');
    // const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    console.log(data)

    function optionstate(e) {
        setValue(e.target.value);
    }

    function cityOptionState(e) {
        setValuecity(e.target.value);
    }

    useEffect(() => {

        if (value.trim() !== '' || valuecity.trim() !== '') {
            setData(data.filter(datas => {
                const locationMatch = value.trim() === '' || datas.location === value;
                const cityMatch = valuecity.trim() === '' || datas.city === valuecity;
                return locationMatch && cityMatch;
               

            }));
            
        } else {
            setData(data);

        }
        const fetchShops = async () => {

            const product = await fetch('http://localhost:5000/shops', {
                method: 'get',
                headers: {
                    'Content-Type': "application/json",

                }
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data.shops);
                    setData(data.shops)

                })
        };
        fetchShops();



    }, [value, valuecity], []);



    return (
        <div className="container">
            <div>
                <Slideshow />
            </div>
            <div className=" home-bg">

                <div className="home-fst-line">
                    <h1>
                        Start your Online Business
                        with Zero Investment...
                    </h1>
                    <h4>
                        On-demand delivery from every restaurant and store in your city. They are massive in the India.

                    </h4>
                    <div className="Home-button">
                        <div className="home-btn-1">
                            <Link to="#">
                                <button type="button"> know more</button>
                            </Link>
                        </div>
                        <div className="home-btn-2">
                            <Link to="/login">
                                <button type="button">LogIn </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="home-para-1">
                    Our Shop
                </h2>
                <div className="home-option-location">
                    Location
                    <select name="dataselect" id="dataselectid" value={value} onChange={optionstate}>
                        <option value="">All State</option>
                        <option value="westbengal">westbengal</option>
                        <option value="assam">assam</option>
                        <option value="jharkhand">jharkhand</option>
                        <option value="bihar">bihar</option>
                        <option value="mp">MP</option>
                    </select>

                    <select name="dataselect" id="dataselectid" value={valuecity} onChange={cityOptionState}>
                        {/* Add a default option */}
                        <option value="">All City</option>


                        {data.map((datas, index) => (
                            <option key={index} value={datas.city}>
                                {datas.city}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="home-section">

                    <div className="home-main">



                        {data.length >= 1 && data.map((update) => (

                            <div className="home-main-1">
                                <div className="home-img">
                                    <img src={update.image?.url} alt={update.Name} />
                                    {/* <img src={`http://localhost:5000/images/${update.image?.imageName}`} alt={update.Name} /> */}


                                </div>
                                <div ClassName="home-heading">
                                    <div className="Star-menu">
                                        <FaStar />

                                        <FaStar />

                                        <FaStar />
                                        <FaStarHalfAlt />

                                        <FaStarHalfAlt />


                                    </div>
                                    <h2>{update.Name}</h2>
                                    <h4>You are Ready</h4>

                                    <Link to={`/shops/${update._id}`} >
                                        <button className="shop-button-home" type="submit">View Shop</button>
                                    </Link>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}
export default Home;