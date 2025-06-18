
# 💬 Chat en Tiempo Real con WebSockets

Este proyecto implementa una aplicación de chat en tiempo real utilizando **Node.js**, **Express**, y **Socket.IO**. Permite a múltiples usuarios conectarse, elegir un nombre y enviarse mensajes instantáneamente, los cuales se transmiten en tiempo real mediante WebSockets (Para usarlo, recuerda acceder a localHost en dos pestañas).

---

## 📁 Estructura del Proyecto

```
project-root/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── sounds/
│       └── sendSound.mp3
│
├── src/
│   ├── controllers/
│   │   └── chatController.js
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env (opcional)
```

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 3. Acceder a la aplicación

```
http://localhost:3000/chat
```

---

## 🧩 Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **Socket.IO**
- **HTML/CSS/JS**
- **Nodemon**

---

## 🔌 Comunicación en Tiempo Real

- Los usuarios se conectan vía WebSocket (`socket.on('connection')`).
- Al enviar un mensaje: `socket.emit('mensaje', data)`.
- El servidor reenvía a todos con `io.emit('mensaje', data)`.
- Los clientes escuchan y renderizan el mensaje.

---

## 🧠 Archivos Clave

### `/src/server.js`

- Crea el servidor y configura Socket.IO.

### `/src/app.js`

- Configura Express, rutas y archivos estáticos.

### `/public/script.js`

- Lógica del cliente con Socket.IO y reproducción de sonido.

### `/src/controllers/chatController.js`

- Renderiza el `index.html`.

### `/src/models/Message.js`

- Modelo base para representar un mensaje.

---

## 💡 Posibles Mejoras

- Guardar mensajes en base de datos.
- Autenticación de usuarios.
- Colores personalizados por usuario.
- Salas privadas (`socket.join()`).
- Notificaciones de conexión/desconexión.

---

## 📄 Licencia

Este proyecto está bajo la licencia **ISC**.
