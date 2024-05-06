const express = require('express');
const path = require('path');
let cat = require('./routes/routeCat.js');
let index = require('./routes/routeIndex.js');
const http = require("http");
let io = require("socket.io")(http);
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cat', cat)
app.use('/', index)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})


io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});