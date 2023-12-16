const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        reqired:true,
    },
    price:{
        type:Number,
        required:[true,"The price must be provided"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating : {
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","MI"],
            message:`{values} is not defined`,
        }
    },
});

module.exports=mongoose.model("Product",productSchema)