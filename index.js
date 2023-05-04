const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/chefData.json')
const port = 4523;
const review = require('./data/review.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('The Continental Kitchen')
})

app.get('/data', (req, res) => {
    res.send(data)
})

// app.get('/data/review', (req, res) => {
//     res.send(review)
// })

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const detailData = data.find((n) => n.id === id);
  res.send(detailData);
});

app.listen(port, () => {
    console.log(port);
})