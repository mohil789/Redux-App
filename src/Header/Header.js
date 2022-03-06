import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import { logout } from '../Actions/Login_action';

const Header = () => {

  const dispatch =useDispatch();

  // const loginResponse = useSelector((state)=>state.login);
  // const navigate = useNavigate()
  // useEffect(()=>{
  //     if(!loginResponse.isformsubmitted) 
  //     navigate('/')
  // },[loginResponse])
  
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p>&emsp;&emsp;</p>
  <a className="navbar-brand" href = '/crud'>REACT REDUX CRUD APP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/contact">Contact Us</Link>
      </li>
      
    </ul>
  </div>
        {/* <span className='text'>Hi, <span className="user__name">{user.name}</span>!</span> */}
        
        <button className="btn btn-light mx-3" onClick={()=> dispatch(logout())}>
            Logout
     </button>
            
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    
    <Link to='/order' className="btn btn-light" >
            Order
     </Link>
     
     <Link to='/create' className="btn btn-light" >
            Create New Order
     </Link>
    </nav>
    </div>
    </div>
  )
}

export default Header