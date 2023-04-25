const express = require('express');
const app = express()
const userRoute = require('./routes/userRoute')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

app.use(cors)

app.use('/api/data',userRoute)

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on http://localhost:${process.env.PORT}`);
})