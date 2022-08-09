const express = require('express')
const app = express()
const port = 5000


const homeRoutes = require('./routes/home')
app.use('/home', homeRoutes)

const gameOfThroneRoutes = require('./routes/game-of-throne')
app.use('/game-of-throne', gameOfThroneRoutes)

const pokemonRoutes = require('./routes/pokemon')
app.use('/pokemon', pokemonRoutes)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})