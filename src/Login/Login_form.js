import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './Login.css';
import { login, request } from '../Actions/Login_action';

const Login_form = () => {
    const navigate = useNavigate();
    const [name, setName]= useState("");
    const [email,setEmail]= useState("");
    const [password, setPassword]= useState("");
    
    const dispatch = useDispatch();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const logdata = {email: email, password: password };
        if(name&&email&& password){
            dispatch(request());
            dispatch(login(logdata));
            navigate("/home")
        }
        else{
            navigate("/");
        }
    };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login here </h1>
        <input
          type="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn"
        disabled= {!email || !password}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login_form