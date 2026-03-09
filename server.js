
const express= require("express")
const app=express();
const connect = require("./Config/db")

const userRouter = require("./Routes/UserRoutes")
const productRouter=require("./Routes/ProductRoutes")
const orderRoutes=require("./Routes/orderRoutes")

let cors=require("cors")
app.use(express.json())
app.use(cors())
connect()


app.use("/main",userRouter)
app.use("/product",productRouter)
app.use("/api/order",orderRoutes)


port=4000; 
app.listen(port,()=>{
    console.log("Server is running on port 4000");

})
