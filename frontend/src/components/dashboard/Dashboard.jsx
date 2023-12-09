import React, { useEffect, useState } from 'react'
import './dashboard.css';
import Chart from '../chart/Chart';
import axios from 'axios';


function Dashboard() {

  const[incomes, setIncomes] = useState([]);
  const[expenses, setExpense] = useState([]);

  const getIncome=async()=>{
    const response = await axios.get('http://localhost:5000/api/v1/getAllIncome');
    setIncomes(response.data.incomes)
  }

  const getExpense=async()=>{
    const response = await axios.get('http://localhost:5000/api/v1/getAllExpense');
    setExpense(response.data.expenses);
  }

  const totalIncome=()=>{
    let totalIncome = 0;
    incomes.forEach((income)=>{
      totalIncome = totalIncome+income.amount;
    });
    return totalIncome;
  }

  const totalExpense=()=>{
    let totalExpense=0;
    expenses.map((expense)=>{
      totalExpense=totalExpense+expense.amount;
    });
    return totalExpense;
  }

useEffect(()=>{
  getIncome();
  getExpense();
},[]);


  return (
    <>
      <h3>All Transections</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <Chart />
            <div className='mt-3'>
              <h4 className='mt-3 text-success'>Total Income:
              <span>
                ${totalIncome()}
              </span></h4>
              <h4 className='mt-3 text-danger'>Total Expense:
              <span>
                ${totalExpense()}
              </span></h4>
              <h4 className='mt-3'>Total Balance : {totalIncome()-totalExpense()}</h4>
            </div>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard