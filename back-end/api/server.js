// API: Application Programing Interface (Interface de Programação de Aplicação) é um sistema que é usado para comunicação de duas ou mais entidades ou computadores
// Serve como uma forma de comunicação seguindo algumas especificações
// POST, GET, PUT, DELETE
// CRUD = Create Read Update Delete
// EndPoint: Rota que pode ser acessada dentro de uma API
// Middleware
import express from "express";
import cors from "cors"; // vai resolver quando se tem domínios diferentes no back-end e front-end
import { db } from "./connect.js"; // variável db que foi criada em connect.js
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

const app = express();
const PORT = 3001;

app.use(cors()); // usar o cors

// app.use(express.json()); // usa-se ao fazer uma requisição POST

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoits '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist"))); // middleware

app.get("*", async (request, response) => {
  // essa são todas as demais URLs que não existem e mostrar o index.htm de forma estática
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  // escuta na porta especificada
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
