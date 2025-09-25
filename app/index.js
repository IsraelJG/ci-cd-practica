Const express = require('express');
Const app = express();
Const port = 3000;
app.get('/', (req, res) => {
res.send('¡Hola desde CI/CD!');
});
app.listen(port,()=>{
console.log(‘App escuchandoen http://localhost:${port}’);
});