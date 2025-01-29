import mongoose from "mongoose";


const mongoDB=async()=>{
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
    const DB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.1199uo1.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0`;
    try{
     await mongoose.connect(DB_URL,{useNewUrlParser:true});
     console.log('DATABASE CONNECTED SUCCESSFULLY')
     const fetched_data= await mongoose.connection.db.collection("food_items");
      const data=await fetched_data.find({},{projection:{}}).toArray();
        global.food_items=data;
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      const catdata=await foodCategory.find({},{projection:{}}).toArray();
      global.foodCategory=catdata;
    }
    catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
export default mongoDB;