import express from 'express'
import path from 'path'
import hbs from 'hbs'
import { connectDB } from './db/connection.js'
import router from './routes/userRoute.js'


import dotenv from 'dotenv'
dotenv.config()

const app = express()

const dataBase = process.env.DATABASE

const staticPath = path.join(process.cwd(),"/public ")
console.log(staticPath) 
const templatePath = path.join(process.cwd(),"templates/views") 
console.log(templatePath) 
const partialsPath = path.join(process.cwd(),"templates/partials") 

app.set("view engine","hbs")
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))

// Applying Middleware............
// app.use('/',registeration)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)



connectDB(dataBase)

export default app