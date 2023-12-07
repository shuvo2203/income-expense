import React, { useEffect, useState } from 'react';
import './expense.css';
import axios from 'axios';
import ViewListIcon from '@mui/icons-material/ViewList';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ClassIcon from '@mui/icons-material/Class';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Exform from '../exform/Exform';

function Income() {
  const [getExpense, setGetExpense] = useState(['']);

  const getAllExpense = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/getAllExpense');
      setGetExpense(response.data.expenses)
    } catch (error) {
      console.log('Error fetching incomes:', error);
    }
  };

  const deleteExpense=async(id)=>{
    await axios.delete(`http://localhost:5000/api/v1/deleteExpense/${id}`);
    getAllExpense();
  }

  const totalExpense=()=>{
    let totalExpense = 0;
    getExpense.forEach((expense)=>{
      totalExpense = totalExpense+expense.amount;
    });
    return totalExpense;
  }

  useEffect(() => {
    getAllExpense();
  },[]);

  return (
    <>
      <div className='container income-content'>
        <h3 className='text-danger'>Expense</h3>
        <div className='row'>
          <div className='col-md-4'>
            <Exform getAllExpense={getAllExpense}/>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'><h5>History</h5></div>
              <div className='col-md-6'>
                <h5 className='text-danger'>Total Expense : <span className='total'>${totalExpense()}</span></h5>
              </div>
            </div>
            {getExpense.map((expense) => (
              <>
                <div className='title'>
                  <p className='income-option'><ViewListIcon />{expense.title}</p>
                  <p className='income-option'><MonetizationOnIcon />{expense.amount}</p>
                  <p className='income-option'><ClassIcon />{expense.category}</p>
                  <p className='income-option'><CommentIcon />{expense.description}</p>
                  <button className='delete'  onClick={()=>deleteExpense(expense._id)} >
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
