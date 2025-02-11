import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('server is running good');
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})