const http = require('http'); // Importamos el módulo 'http' para crear un servidor HTTP
const app = require('./app'); // Importamos la aplicación Express
const socketIo = require('socket.io'); // Importamos Socket.IO

const server = http.createServer(app); // Creamos un servidor HTTP con la aplicación Express
const io = socketIo(server); // Creamos una instancia de Socket.IO

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('mensaje', (data) => {
    console.log('Mensaje recibido:', data);
    io.emit('mensaje', data); // Reenviamos a todos
  });

    socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });

});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`);
});