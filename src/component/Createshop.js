import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../../../frontend/src/createshop.css'
import '../css/createshop.css'
import axios from 'axios'

const Createshop = () => {
    const [formData, setFormData] = React.useState({
        Name: '',
        city: '',
        location: ''
    });

    const { Name, city, location } = formData;
    const [image, setImage] = React.useState('');
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        if (e.target.name === 'image') {
            const render = new FileReader();

            render.onload = () =>{
                if(render.readyState === 2){
                    setImage(render.result)
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const createshop = async (e) => {
        e.preventDefault();
        try {
            if (!image) {
                toast.error('Please select an image for the shop.');
                return;
            }

            const myForm = new FormData();
            myForm.append('Name', Name);
            myForm.append('location', location);
            myForm.append('city', city);
            myForm.append('image', image);

            let { data } = await axios.post('http://localhost:5000/createshops', myForm, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
           console.log(data)
           toast.success("Added Successfully");
           setTimeout(()=>{
            navigate("/")

           },1500)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error("No response received from the server. Please try again later.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <>
            <ToastContainer />

            <div>Createshop</div>
            <div className="createshop-form">
                <form onSubmit={(e)=> createshop(e)} className="createshop-form-input">
                    <input className="createshop-field" onChange={onChangeHandler} type="text" placeholder="shop name" value={Name} name='Name' /><br />
                    <input className="createshop-field" accept='image/*' type="file" files={image} multiple onChange={onChangeHandler} name='image' /><br />
                    <input className="createshop-field" onChange={onChangeHandler} type="text" placeholder="location" value={location} name='location' required /><br />
                    <input className="createshop-field" onChange={onChangeHandler} type="text" placeholder="city" value={city} name='city' required /><br />
                    <button className="createshop-button" type='submit'>Create Shop</button>
                </form>
            </div>
        </>
    );
};

export default Createshop;
