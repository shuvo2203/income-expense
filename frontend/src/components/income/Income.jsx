import React, { useEffect, useState } from 'react';
import './income.css';
import Form from '../form/Form';
import axios from 'axios';
import ViewListIcon from '@mui/icons-material/ViewList';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ClassIcon from '@mui/icons-material/Class';

function Income() {
  const [getincomes, setgetincomes] = useState(['']);

  const getAllIncome = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/getAllIncome');
      setgetincomes(response.data.incomes)
      console.log(response.data.incomes);
    } catch (error) {
      console.log('Error fetching incomes:', error);
    }
  };


  useEffect(() => {
    getAllIncome();
  }, []);

  return (
    <>
      <div className='container'>
        <h3>Incomes</h3>
        <div className='row'>
          <div className='col-md-6'>
            <Form />
          </div>
          <div className='col-md-6'>
            <h2>Total</h2>
              {getincomes.map((income)=>(
                <>
                  <div className='title'>
                    <p><ViewListIcon/>:{income.title}</p>
                    <p><MonetizationOnIcon />:{income.amount}</p>
                    <p><ClassIcon/>:{income.category}</p>
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
