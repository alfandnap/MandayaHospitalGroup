const express = require('express')
// const router = require('./routes/route')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})