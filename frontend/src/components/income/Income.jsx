import React, { useEffect, useState } from 'react';
import './income.css';
import Form from '../form/Form';
import axios from 'axios';
import ViewListIcon from '@mui/icons-material/ViewList';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ClassIcon from '@mui/icons-material/Class';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Income() {
  const [getincomes, setgetincomes] = useState(['']);

  const getAllIncome = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/getAllIncome');
      setgetincomes(response.data.incomes)
    } catch (error) {
      console.log('Error fetching incomes:', error);
    }
  };

  const deleteIncome=async(id)=>{
    await axios.delete(`http://localhost:5000/api/v1/deleteIncome/${id}`);
    getAllIncome();
  }

  const totalIncome=()=>{
    let totalIncome = 0;
    getincomes.forEach((income)=>{
      totalIncome = totalIncome+income.amount;
    });
    return totalIncome;
  }

  useEffect(() => {
    getAllIncome();
  },[]);

  return (
    <>
      <div className='container income-content'>
        <h3 className='text-success'>Incomes</h3>
        <div className='row'>
          <div className='col-md-4'>
            <Form getAllIncome={getAllIncome}/>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'><h5>History</h5></div>
              <div className='col-md-6'>
                <h5 className='text-success'>Total Income : <span className='total'>${totalIncome()}</span></h5>
              </div>
            </div>
            {getincomes.map((income) => (
              <>
                <div className='title'>
                  <p className='income-option'><ViewListIcon />{income.title}</p>
                  <p className='income-option'><MonetizationOnIcon />{income.amount}</p>
                  <p className='income-option'><ClassIcon />{income.category}</p>
                  <p className='income-option'><CommentIcon />{income.description}</p>
                  <button className='delete'  onClick={()=>deleteIncome(income._id)} >
                    <DeleteIcon/>
                  </button>
                  <button className='edit'>
                    <EditNoteIcon />
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
