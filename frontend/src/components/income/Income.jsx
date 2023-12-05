import React from 'react'
import './income.css';
import { useGlobalContext } from '../../context/GlobalContext';

function Income() {

 const{addIncome}  = useGlobalContext()

  return (
    <>
      <div className='container'>
        <h3>Incomes</h3>
      </div>
    </>
  )
}

export default Income