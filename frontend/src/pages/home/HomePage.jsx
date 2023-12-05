import React, { useState } from 'react'
import './home.css';
import { menuItems } from '../../utils/menuItems';
import Dashboard from '../../components/dashboard/Dashboard';
import Income from '../../components/income/Income';
import Expense from '../../components/expense/Expense';
import Alltransection from '../../components/all transection/Alltransection';


function Home() {
  const [active, setActive] = useState(1);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Alltransection />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default:
        return <Dashboard />
    }
  }
  return (
    <>
      <div className='container'>
        <h2 className='text-center py-3'>Expense Tracker</h2>
        <div className='main'>
          <div className='col-md-3 p-3 menu'>
            {menuItems.map((item) => {
              return <li key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? 'active' : ''}
              >{item.icon}<span>{item.title}</span></li>
            })}
          </div>
          <div className='col-md-9 content'>
            {displayData()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home