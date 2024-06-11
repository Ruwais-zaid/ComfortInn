import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import {v2 as cloudinary} from 'cloudinary'
import HotelsRoutes from './routes/my-hotels'
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})


mongoose.connect("mongodb://localhost:27017/Branch")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

const app=express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
}))

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/my-hotels",HotelsRoutes)

app.get('/',(req,res)=>{
  res.send("Hello world")
})
  

const PORT = process.env.PORT || 8005;
app.listen(PORT,()=>{
    console.log(`Server is running at ${8005}`)
})