import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';

function Register() {

    const[loading, setLoading] = useState(false)

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/api/v1/register',{
                name,email,password
            });
            setLoading(false);
            if(response.status===200){
                alert('Registration Successfull');
                localStorage.setItem('user', JSON.stringify({...response.data, password:''}));
                setLoading(false);
                navigate('/login');
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


//prevent for login user
useEffect(()=>{
    if(localStorage.getItem('user')){
        navigate('/')
    }
},[navigate]);

  return (
    <>
        <div className='row text-center p-5'>
            <div className='col-sm-4 mx-auto p-5'>
            <div className='conatiner'>
            <h1 className='pb-5'>Registration Form</h1>
            {loading && <Spinner /> } 
            <form className='form-control p-5' onSubmit={handleSubmit}>
                <div>
                    <input className='form-control' 
                    type='text' placeholder='Enter Your Name'
                    onChange={e=>setName(e.target.value)} 
                    />    
                </div><br/>

                <div>
                    <input className='form-control' 
                    type='email' placeholder='Enter Your Email' 
                    onChange={e=>setEmail(e.target.value)} 
                    />
                </div><br/>

                <div>
                    <input className='form-control' 
                    type='password' placeholder='Enter Your Password'
                    onChange={e=>setPassword(e.target.value)}  
                    />
                </div><br/>

                <button className='btn btn-primary'>Register</button>
                <p>Already have an account?<Link to='/login'>Login</Link></p>
            </form>
        </div>
            </div>
        </div>
    </>
  )
}

export default Register