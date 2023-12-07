import React, { useState } from 'react'
import './exform.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'
// import { useGlobalContext } from '../../context/GlobalContext';
import axios from 'axios';

function Form(props) {

    // const{addIncome} = useGlobalContext();

   const[title, setTitle] = useState('')
   const[amount, setAmount] = useState('')
   const[date, setDate] = useState('')
   const[category, setCategory] = useState('')
   const[description, setDescription] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/addExpense',{
            title,amount,date,category,description
        });
        props.getAllExpense();
        if(response.status === 200){
            alert('income added')
        }else{
            alert('something wrong')
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <div className='mb-3 control'>
                    <input
                        type='text'
                        placeholder='Title'
                        onChange={(e)=>setTitle(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className='mb-3 control'>
                    <input
                        type='text'
                        placeholder='Amount'
                        onChange={(e)=>setAmount(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className='mb-3 control'>
                    <input
                        type='date'
                        placeholder='Date'
                        onChange={(e)=>setDate(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className='mb-3 control'>
                    <select class="form-select form-select-lg mb-3"  onChange={(e)=>setCategory(e.target.value)} aria-label=".form-select-lg example">
                        <option value="" disabled>Select Category</option>
                        <option value="salary">Salary</option>
                        <option value="freelanching">Freelanching</option>
                        <option value="tution">Tution</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='mb-3 control'>
                    <input
                        type='text'
                        placeholder='Description'
                        onChange={(e)=>setDescription(e.target.value)}
                        className='form-control'
                    />
                </div>
                <button className='btn btn-danger'>Add Expense</button>
            </form>
        </>
    )
}

export default Form