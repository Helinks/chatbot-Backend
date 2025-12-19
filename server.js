console.log("Iniciando proceso de arranque..."); // <--- Agrega esto
const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port,'0.0.0.0',()=>console.log('Bot Activo en puerto ' + port));
