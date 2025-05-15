import express from 'express'
const app = express()
const PORT = 3000

//Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.use(express.json())
app.use(express.static(__dirname + "/dist"))

//controllers
app.use("/api/applicant", require("./controller/applicant"))

//error handling 
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status ?? 500).send(err)
})