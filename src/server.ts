import { app } from "./app.js";
import { AppDataSource } from "./config/typeOrm.js";

app.listen(3000)

AppDataSource.initialize()
  .then(() => {
    app.listen(3000);
    console.log("Servidor rodando e banco conectado!");
  })
  .catch((error) => console.error("Erro ao conectar no banco:", error));