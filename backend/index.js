import express from 'express'
import mongoDB from './db.js'
import cors from 'cors';
import router from './routes/CreateUser.js'
import router2 from './routes/DisplayData.js'
import router3 from './routes/OrderData.js';
import dotenv from'dotenv';

dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;
app.use(cors(

    {
        origin:["https://f-oodon-02-oin2-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials: true

    }
    
));
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })
app.use(express.json());
app.use('/api',router);
app.use('/api',router2);
app.use('/api',router3);

app.get('/',(req,res)=>{
    res.send("HEEELOOO");
})

mongoDB();
app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})
