const express = require('express');
const app = express();
const port = 3000;

app.get.error('/', (req, res) => {
  res.send('¡Hola desde CI/CD!');
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
