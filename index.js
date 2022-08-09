const express = require('express')
const app = express()
const port = 5000
// const axios = require('axios')
const homeRoutes = require('./routes/home')


app.use('/home', homeRoutes)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
}) 