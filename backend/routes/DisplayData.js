import express from 'express'
 const router2=express.Router();

 router2.post('/foodData',(req,res)=>{
    try{
      console.log(global.food_items)
       res.send([global.food_items,global.foodCategory]);
    }
    catch(error){
   console.error(error.message);
  
    }
   })
 export default router2;