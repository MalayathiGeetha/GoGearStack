import  express from "express";
import cors from "cors"
import "dotenv/config";
import connectDB from "./configs/db.js"
import userRouter from "./routes/UserRouter.js"
import ownerRouter from "./routes/ownerRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"
const app=express();


//connect db
await connectDB()

//middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>res.send("Server is running"))

app.use('/api/user',userRouter)
app.use("/api/owner",ownerRouter)
app.use('/api/bookings',bookingRouter)


const PORT=process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))

