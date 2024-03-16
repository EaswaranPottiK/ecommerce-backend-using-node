const express = require('express')
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();

const userRoutes = require('./routes/user')
const userProducts = require('./routes/products')

console.log("Ecomm app")
mongoose.connect(process.env.databaseURL)
.then(()=>console.log("databse connected successfully"))
.catch((error)=>console.log("databse connection failed",error))
app.listen(process.env.port,()=>{
    console.log(`App is running at ${process.env.port}`)
})

app.use(express.json());
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/products",userProducts)