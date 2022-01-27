const express = require('express');
const { handle } = require('express/lib/application');
const mongoose  = require('mongoose');

const connectDB = require('./config/connect_DB');
const BooksDB = require('./models/modelBooks');


//create new Book 
const book = new BooksDB({title:"Macbeth",author:"William Shakespeare",price:120,created:"1950/12/32",available:true});
// book.save((err)=>{
//     if(err)return handleError(err)
//     //saved 
//     console.log("new books created");
// });


// Find All Books 

const search = async()=>{
    try {
        const data = await BooksDB.find({})
        console.log(data);
    } catch (error) {
        console.log(err);
    }
}

// search()

// Find All Books 

const searchOne = async()=>{
    try {
        const data = await BooksDB.find({price: { $gte: 50 } })
        console.log(data);
    } catch (error) {
        console.log(err);
    }
}

// searchOne()

const query = {_id:"61f268b7d75a0bb61ef8418b"} ;
const Update = async()=>{
    const data =await BooksDB.findOneAndUpdate(query,{price:55,author:"walid",created:"2020/02/30",available:true},(err,data)=>{
        try {
            console.log(data,"updated...");
        } catch (err) {
            console.log(err);
        }
    })
}

// Update()

//findOneAndDelete

const DeleteById = async()=>{
    const delData = await BooksDB
    .findByIdAndDelete("61f268b7d75a0bb61ef8418b",(data,err)=>{
        try {
            console.log('Data romoved');
        } catch (error) {
            console.log(error);
        }
    })
}

const Delete = async()=>{
    const delData = await BooksDB
    .findOneAndDelete({price:40},(data,err)=>{
        try {
            console.log('Data romoved',data);
        } catch (error) {
            console.log(error);
        }
    })
}


// Delete()

connectDB();

const app = express();

const PORT = 5000;

app.listen(PORT,(err)=>{
    err ? console.log(err) :
    console.log(`Server is runnig on Port ${PORT}...`);
})