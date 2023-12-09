import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {DateFormate} from '../../utils/DateFormate';
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {


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
  
  useEffect(()=>{
    getIncome();
    getExpense();
  },[]);
  
    const data={
      labels:incomes.map((inc)=>{
        const date = inc.date;
        return DateFormate(date)
      }),
    
      datasets:[
        {
          label:'Income',
          data:[
            ...incomes.map((income)=>{
              const{amount} = income;
              return amount;
            })
          ],
          backgroundColor:'green',
          tension:.2
        },
        {
          label:'Expense',
          data:[
            ...expenses.map((expense)=>{
              const{amount} = expense;
              return amount;
            })
          ],
          backgroundColor:'red',
          tension:.2
        }
      ]
    }

  return (
    <>
        <div>
            <Line data={data}/>
        </div>
    </>
  )
}

export default Chart