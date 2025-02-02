/*const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde Node.js backend');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/
const http = require("http")

function requestController() {
    // Logica de nuestra funcion
    console.log("Hola mundo!!!!!!!!!!")
}


// Configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)
