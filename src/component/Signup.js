import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            // navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password);
        // alert('Signup succesfully')

        let result = await fetch('http://localhost:5000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result))
        if (result.name && result.email && result.password) {
            alert('signup succesfully')
            navigate("/");
        } else {
            alert("please enter a valid data")
        }

    }

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <form className="signup-form">
                <div className="login-inputbox">
                    <input className="inputBox" type="text"
                        value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name..." />

                    <input className="inputBox" type="text"
                        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email..." />

                    <input className="inputBox" type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password..." />

                    <button onClick={collectData} className="appButton">Sign up</button>
                </div>
            </form>
        </div>

    )
}
export default SignUp;

