import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeButton, playButton, playMusic } from "../../Assets/svg/svg";
import { setClick, setMod, setSpeed } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import sound from "../../Assets/sound/audio.mp3";
import style from "./style.module.scss";

const MediaContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(true);
  const matches = useMediaQuery("(max-width:1025px)");
  const { speedStatus,click } = useSelector((store) => store.planets);
  const audio = new Audio(sound);
  const handleClick = () => {
    dispatch(setClick(false));
    dispatch(setIsSun(false));
    dispatch(setMod(false));
    navigate("/");
    matches === false && document.exitFullscreen();
  };
  const handlePlay = () => {
    dispatch(setSpeed(!speedStatus));
    setPlay(!play);
  };  
  const handleMusicPlay = (open) => {
    if (audio.paused ) {
      audio.play();
    } else if (!audio.paused) {
      audio.pause();
    }
    setOpen(!open);
  };

  return (
    <div className={style.container}>
      <div className={style.close_button}>
        <button onClick={() => handleClick()}>{closeButton()}</button>
      </div>
      <div className={style.media_button} style={{display:click ? "none" : "block"}}>
        <button onClick={() => handlePlay()}>{playButton(play) }</button>
        <button onClick={() => handleMusicPlay(open)}>{playMusic(open) }</button>
      </div>
    </div>
  );
};

export default MediaContainer;
