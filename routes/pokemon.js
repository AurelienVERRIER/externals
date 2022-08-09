const express = require('express')
const app = express()
const axios = require('axios')

const getData = async () => {
  const response = await axios.get('')
}


app.get('/pokemon/url/first151', async (req, res) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  res.json(response.data)
})

app.get('/pokemon/url/:id'), async (req, res) => {
  const response = await axios.get('https://pokeapi.com/api/v2/pokemon/id')
  console.log(req.params)
}

app.get('/pokemon/url/:id/random'), async (req, res) => {
  const response = await axios.get('https://pokeapi.com/api/v2/pokemon/id')
  if (id === "àdéterminer") {
  res.json(response.data)
} else {
  res.send('error 404')
}}


// app.get('/pokemon/*', (req, res) => {
//   res.send('All routes - error 404')
// })

module.exports = app