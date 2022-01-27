const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/ws-f1');
        console.log("DB Connected ....");
    } catch (error) {
        handleError(error);
    }
}

module.exports = connectDB;