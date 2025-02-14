import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  // let items = 5;
  const [items, setItems] = useState(5); // variável de estado que será atualizada

  return (
    <div className="song-list">
      {songsArray
        .filter((currenValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
      {/* implementar o ver menos */}
    </div>
  );
};

export default SongList;
