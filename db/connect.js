const mongoose = require('mongoose')

uri="mongodb+srv://sableaniket0508:4zYkPmPmo48nzTXo@aniketapi.btn7kew.mongodb.net/AniketAPI?retryWrites=true&w=majority"


const connectDB = ()=>{
    
    return mongoose.connect(uri) 
}


module.exports = connectDB