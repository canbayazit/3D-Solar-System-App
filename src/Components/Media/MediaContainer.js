import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  closeButton,
  detailToggle,
  playButton,
} from "../../Assets/svg/svg";
import { setClick, setMod, setSpeed } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import sound from "../../Assets/sound/audio.mp3";
import style from "./style.module.scss";

const MediaContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [play, setPlay] = useState(true);
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:1025px)");
  const { speedStatus, click, pathname } = useSelector(
    (store) => store.planets
  );
  const handleClick = () => {
    if (!open) {
      dispatch(setClick(false));
      dispatch(setIsSun(false));
      dispatch(setMod(false));
      navigate("/");
    } else {
      setOpen(false);    
    }
    
  };
  const handlePlay = () => {
    dispatch(setSpeed(!speedStatus));
    setPlay(!play);
  };
  const setToggle = () => {
    setOpen(true);    
  };
  return (
    <div className={style.container}>
      <div className={style.close_button}>
        <button onClick={() => handleClick()}>{closeButton()}</button>
      </div>
      <div
        className={style.detail_toggle_container}
        style={{
          display:
            pathname === "/solarsystem"
              ? !click
                ? matches
                  ? open
                    ? "none"
                    : "flex"
                  : "none"
                : "none"
              : "none",
        }}
      >
        <button className={style.detail_toggle} onClick={() => setToggle()}>
          {detailToggle()}
        </button>
      </div>
      <div
        className={style.media_container}
        style={{display:matches? click? "none" : open ? "flex": "none":click? "none":"flex"}}
      >
        <div className={style.speed_container}>
          <span>
            <h3>
              {play ? "Pause Orbital Rotation" : "Start Orbital Rotation"}
            </h3>
          </span>
          <button onClick={() => handlePlay()}>{playButton(play)}</button>
        </div>
        <div className={style.audio_container}>
          <audio controls autoPlay>
            <source src={sound} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default MediaContainer;
