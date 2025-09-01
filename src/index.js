const express = require("express");
const app = express();

app.use(express.json());

// Rota simples
app.get("/", (req, res) => {
  res.json({ message: "API rodando com Node.js e Docker 🚀" });
});

// Exemplo de rota POST
app.post("/dados", (req, res) => {
  const { nome } = req.body;
  res.json({ recebido: nome });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
