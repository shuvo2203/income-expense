const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
require('./db/db');

const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());


const income = require('./router/incomeRoute');
const expense = require('./router/expenseRoute');

app.use('/api/v1', income);
app.use('/api/v1', expense);


app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`);
});