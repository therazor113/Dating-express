const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4015

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
  next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, _res, next) => {
  console.info(req.method, req.path)
  next()
});

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
