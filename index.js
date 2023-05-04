const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/chefData.json')
const port = 4523;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hellowwww')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const detailData = data.find((n) => n.id === id);
  res.send(detailData);
});

app.listen(port, () => {
    console.log(port);
})