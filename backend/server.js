const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'config/.env'});
const cors = require('cors');
require('./config/database');

const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());

//routes
const user = require('./routes/userRoute');
const transection = require('./routes/transectionRoute');

app.use('/api/v1', user);
app.use('/api/v1', transection);


app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`);
});