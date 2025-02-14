// Será executado uma vez para preencher o banco de dados

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray); // inserir todos os songs no banco de dados
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray); // inserir todos os artist no banco de dados

console.log(responseSongs);
console.log(responseArtists);
