import { createContext, useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = 'localhost:5000/api/v1/';

const GlobalContext = createContext();

export const GlobalProvider =({children})=>{

    const[income, setIncome] = useState([]);
    const[expense, setExpense] = useState([]);
    const[error, setError] = useState(null);

    const addIncome=async(income)=>{
        const response = await axios.post(`${BASE_URL}addIncome`,income);
    }

    return (
        <GlobalContext.Provider
            value={addIncome}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}