import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';

export const menuItems=[
    {
        id:1,
        title:'Dashboard',
        icon:<DashboardIcon />,
        link:'/dashboard'
    },
    {
        id:2,
        title:'View Transection',
        icon:<AccountBalanceWalletIcon />,
        link:'/viewTransection'
    },
    {
        id:3,
        title:'Income',
        icon:<MonetizationOnIcon />,
        link:'/income'
    },
    {
        id:4,
        title:'Expense',
        icon:<SellIcon />,
        link:'/expense'
    }
]