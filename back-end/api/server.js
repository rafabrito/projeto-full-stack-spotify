// API: Application Programing Interface (Interface de Programação de Aplicação) é um sistema que é usado para comunicação de duas ou mais entidades ou computadores
// Serve como uma forma de comunicação seguindo algumas especificações
// POST, GET, PUT, DELETE
// CRUD = Create Read Update Delete
// EndPoint: Rota que pode ser acessada dentro de uma API
// Middleware
import express from "express";
import cors from "cors"; // vai resolver quando se tem domínios diferentes no back-end e front-end
import { db } from "./connect.js"; // variável db que foi criada em connect.js

const app = express();
const PORT = 3001;

app.use(cors()); // usar o cors

// app.use(express.json()); // usa-se ao fazer uma requisição POST

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoits '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  // escuta na porta especificada
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
