const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const path = require('path')

mongoose.set('strictQuery', false);



//connect to DB
connectDB()


const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))
// app.use('/api/notes', require('./routes/noteRoutes'))

// Serve Frontend
if(process.env.NODE_ENV === 'production') {

    // set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    //loading index.html in the build folder
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
      })
    } else {
      app.get('/', (_, res) => {
        res.status(200).json({ message: 'Welcome to the Support Desk API' })
      })
    }


app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))