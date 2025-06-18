const express = require('express');
const app = express(); // Importamos el módulo 'express' para crear la aplicación web
const chatRoutes = require('./routes/chatRoutes'); // Importamos las rutas del chat
const path = require('path'); // Importamos el módulo 'path' para manejar rutas de archivos

// configurciones 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servimos archivos estáticos accecibles para el cliente desde la web
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/chat', chatRoutes);

module.exports = app;
