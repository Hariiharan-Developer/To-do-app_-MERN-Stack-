const mongoose = require('mongoose')

//Connecting Database:

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('Database Craeted SuccesFully')


    } catch (error) {
         console.log('Database Connection Error:',error.message)
    }
}


 module.exports=connectDB