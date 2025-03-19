const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');

const app = express();

app.use(cors())
app.use(express.json())


connectDB()

app.use("/auth",router)
app.use("/cart",cartrouter)

app.get('/',(res,req)=>{
    res.send('Hello World!')
})

const port = 5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
