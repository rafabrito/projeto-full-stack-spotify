import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react"; // hook useRef que atribui uma referência a uma variável e o useEffect realiza limpeza quando o componente é re-renderizado
import { useState } from "react";

const formatTime = (timeinSeconds) => {
  const minutes = Math.floor(timeinSeconds / 60)
    .toString()
    .padStart(2, "0"); // recupera os minutos e ignora o valor decimal
  const seconds = Math.floor(timeinSeconds - minutes * 60)
    .toString()
    .padStart(2, "0"); // recupera os segundos restantes

  return `${minutes}:${seconds}`;
};

const timeInSecond = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef(); // cria referência na variável
  const progressBar = useRef(); // cria referência na variável
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSecond(duration);
  console.log(durationInSeconds);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000); // executa um data função a cada segundo

    return () => clearInterval(intervalId); // realiza limpeza quando o compolante player é re-renderizado
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
