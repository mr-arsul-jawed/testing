import express from 'express';
// import {connectDB} from './config/db.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userrouter from './router/user.router.js';

dotenv.config({
    path: './.env'
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// db connection
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


// routes
app.use('/api/user', userrouter);

export default  app; 





