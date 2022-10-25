const express = require('express')
const app = express()
const port = process.env.PORT || 5001;

const cors = require('cors')
app.use(cors())

const categories = require('./data/categories.json');

app.get('/categories', (req, res) =>{
    res.send(categories);
})


app.get('/', (req, res) => {
  res.send('Course API running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})