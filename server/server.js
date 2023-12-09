import express from 'express'
import dotenv from 'dotenv'
import { dbConn } from './db/dbConnection.js'
import { userRouter }  from './routes/userRoutes.js'


//Instantiating express 
const app = express()

//middleware
app.use(express.json())
dotenv.config()

app.use('/', userRouter)


const port = process.env.PORT ||8000

//server and db respondings

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
    dbConn()
})
