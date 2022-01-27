const mongoose = require('mongoose');
const {Schema, model} = mongoose ; 

const BooksSchema = new Schema({
    title:{type:String , required:true},
    author: {type:String,required:true},
    price:{type:Number},
    created : String,
    available:{type:Boolean,required:true}

})

const BooksDB = model('books',BooksSchema)

module.exports = BooksDB ;