import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Productdata from '../Data/Productdata';
import '../css/transactionpage.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector, Provider } from "react-redux";
import Yourorder from './Yourorder';
import { addToOrder } from '../redux/orderpageActions';







function Transactionpage() {
    const [data, setData] = useState(Productdata);

    const dispatch = useDispatch();


    const { id } = useParams();
    const selectitem = Productdata.find(product => product.id === id);
    if (!selectitem) {
        return <div><h1>item is not found !</h1></div>;
    }
    // console.log(selectitem)
    const payment = (item) => {
        dispatch(addToOrder(item));
        // console.log(item)
        
        toast.success("Successfully Order", {
            position: toast.POSITION.TOP_CENTER,
        });

    }
    return (
        <>
            <ToastContainer />

            <div>Transactionpage</div>
            <div className="transactionpage">
                <h3>{selectitem.name}</h3>
                <h5>{selectitem.title}</h5>
                <p>₹{selectitem.price}</p>
                <button onClick={() => payment(selectitem)}>Payment Now</button>
            </div>
        </>
    )
}

export default Transactionpage;