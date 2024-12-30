import dotenv from "dotenv"
import express from "express"

const app = express()

dotenv.config({
    path: './.env'
})
const port= process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`App started listining on port: ${port}`)
})