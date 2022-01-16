const server = require('http').createServer();
//const io = require('socket.io')(server); //old way
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on ${PORT}...`);

io.on('connection', (socket) => {
  console.log('a user connected')
});