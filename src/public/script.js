const socket = io();
function enterChat() {
  const user = document.getElementById('user').value.trim();
    document.getElementById('userName').textContent = user;
  if (user !== "") {
    document.getElementById('userModal').style.display = 'none';
    document.getElementById('chatContainer').classList.remove('hidden');

  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

function enviarMensaje() {
  const user = document.getElementById('user').value;
  const message = document.getElementById('message').value;
  if (!user || !message) return;
  const sonido = document.getElementById("sonidoEnviar");
      sonido.currentTime = 0;
      sonido.play();

  socket.emit('mensaje', { user, message, });
  document.getElementById('message').value = '';
}

socket.on('mensaje', (data) => {
  const mensajes = document.getElementById('mensajes');
  const nuevoMensaje = document.createElement('p');
  nuevoMensaje.innerHTML = `<i class="fas fa-user"></i> <strong>${data.user}:</strong> ${data.message}`;
  mensajes.appendChild(nuevoMensaje);
});

