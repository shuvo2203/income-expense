import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';

function Login() {

    const[loading, setLoading] = useState(false)

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/api/v1/login',{
                email,password
            });
            setLoading(false)
            if(response.status===200){
                alert('Login Successfull');
                localStorage.setItem('user', JSON.stringify({...response.data}));
                setLoading(false);
                navigate('/');
            }
        } catch (error) {
            alert('Login Failed')
            setLoading(false);
            console.log(error);
        }
    }

    //prevent for login
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
            <h1 className='pb-5'>Login Form</h1>
            {loading && <Spinner /> } 
            <form className='form-control p-5' onSubmit={handleSubmit}>
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
                <button className='btn btn-primary'>Login</button><br/>
                <p>Don't have any account?<Link to='/register'>Register</Link></p>
            </form>
        </div>
            </div>
        </div>
    </>
  )
}

export default Login