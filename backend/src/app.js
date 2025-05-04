import express from 'express';
// import {connectDB} from './config/db.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

const app = express();
const PORT = process.env.PORT || 4000;




connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`sever is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(`Error: ${error.message}`);
    process.exit(1);
});










export default  app; 





