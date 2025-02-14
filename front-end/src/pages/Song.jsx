import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams(); // recupera o id que está embutido na url

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj, index) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj, index) => currentSongObj.artist === artist
  ); // recupera todas as músicas de um artista específico

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  ); // gera um número aleatório entre 0 até o tamanho do array menos 1

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  ); // gera um número aleatório entre 0 até o tamanho do array menos 1

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id; // recupera o id de uma música aleatória

  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id; // recupera o id de uma música aleatória

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song-artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
