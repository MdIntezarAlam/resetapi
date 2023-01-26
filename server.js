import express from 'express'
import connectDB from './database/database.js'
import userRoutes from './routers/userRoures.js'
const port = process.env.PORT || 4000

const app = express()
app.use(express.json())

app.use("/api/v1", userRoutes)

app.listen(port, () => {
    console.log(`server is listining  on localhost ${port}`)
})
connectDB()