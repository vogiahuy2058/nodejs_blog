const express = require('express')
const app = express()
const port = 3000

app.get('/tintuc', (req, res) => {
  var x = 1;
  var y = 2;
  var c = x+ y;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})