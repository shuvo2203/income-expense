import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const[loginUser, setLoginUser] = useState('');

useEffect(()=>{
  const user = JSON.parse(localStorage.getItem('user'));
  if(user){
    setLoginUser(user)
  }
},[]);

  const navigate = useNavigate();

const logoutHandler=()=>{
  localStorage.removeItem('user');
  navigate('/login')
}

  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand">Income&Expense</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <p className='nav-link pt-3'>{loginUser && loginUser.user.name}</p>
        </li>
        <li class="nav-item">
            <button className='btn btn-primary mt-2'
            onClick={logoutHandler}
            >Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;