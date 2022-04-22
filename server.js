const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')
const connectDb = require('./db/connect')


const PORT = process.env.PORT || 3000
const server = http.createServer(app)

//starts the server
async function startServer(){
    
    //Connection to the database
    await connectDb(process.env.MONGO_URI)

    server.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}...`)
    })
}

startServer()

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready!!')
})

mongoose.connection.on('error',(err)=>{
    console.log(err)
})