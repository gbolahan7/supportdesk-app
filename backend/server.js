const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')


//connect to DB
connectDB()


const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to support desk API'})
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))