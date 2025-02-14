// JavaScript Assíncrono
// await: instrução que espera algo acontecer para proseguir
// async: quando se usa o await será necessário colocar que a instrução é assíncrona
// fullfilled: quando uma promise ou promessa é completa

import { MongoClient } from "mongodb";
// senha: BA9cSEmYW95Nrflv
const URI =
  "mongodb+srv://rafabrito295:BA9cSEmYW95Nrflv@cluster0.x7kur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAuto");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
