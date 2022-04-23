const mongoose = require('mongoose')
//Establishes connection with database
async function connectDb(url){
    return  mongoose.connect(url)
}

module.exports = connectDb