import React, { useState } from "react";
import ProfileImg from "../../images/image.jpg";
import "./LoginPage.css";

async function loginUser( credentials ) {
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const LoginPage = (props) => {
    const [ username, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        props.setToken(token);
    }

    return (
        <div className="loginContainer">
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <img src={ProfileImg} alt="login_image"/>
                <label htmlFor="login-string" id="login">
                    Login
                </label>
                <span></span>
                <input type="text" id="login-string" autoComplete="off" required
                       onChange={(e) => setUserName(e.target.value) }/>
                <label id="pass" htmlFor="pass-string">
                    Password
                </label>
                <span></span>
                <input type="password" id="pass-string" autoComplete="off"
                       required onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" type="submit">Log in</button>
            </form>

        </div>
    )
}

export default LoginPage;