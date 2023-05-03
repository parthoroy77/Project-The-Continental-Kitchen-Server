const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data.json')
const port = 4523;

app.get('/', (req, res) => {
    res.send('Hellowwww')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(port);
})