const mongoose = require('mongoose');
mongoose.connect(process.env.SECRET_KEY).then(()=>{
    console.log('database connected');
}).catch((error)=>{
    console.log(error);
})