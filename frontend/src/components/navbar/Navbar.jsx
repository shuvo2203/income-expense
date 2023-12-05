import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';

function Navbar() {
  return (
    <>
      {/* <div className='col-md-3 py-4 pb-0 menu'> */}
        <ul>
          <li>
            <span><DashboardIcon /></span>
            <Link to='/alltransection'>Dashboard</Link>
          </li>
          <li>
            <span><AccountBalanceWalletIcon /></span>
            <Link to='/'>View Transection</Link>
          </li>
          <li>
            <span><MonetizationOnIcon /></span>
            <Link to='/'>Incomes</Link>
          </li>
          <li>
            <span><SellIcon /></span>
            <Link to=''>Expenses</Link>
          </li>
        </ul>
      {/* </div> */}
    </>
  )
}

export default Navbar