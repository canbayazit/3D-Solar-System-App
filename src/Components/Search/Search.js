import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { textures } from "../../Constant/planet_image/image";
import { setClick, setImage, setPlanetArray, setPlanetIndex, setPositionX, setRadius, setTexture } from "../../Store/PlanetSlice";
import { setIsSun } from "../../Store/StarSlice";
import style from "./style.module.scss";

const Search = () => {
  const { planets ,mod} = useSelector((store) => store.planets);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const li = document.getElementById("list_item");
    let status = document.getElementById("list").contains(li);
    status ? setStatus(true) : setStatus(false);
  }, [text]);
  const handleClick = (id,rad) => {
    dispatch(setPlanetIndex(id - 1));
    dispatch(setRadius(rad));
    dispatch(setClick(true));
    dispatch(setIsSun(false));
    dispatch(setPlanetArray(planets));
    dispatch(setTexture(textures[id-1].texture));
    dispatch(setImage(textures[id-1].image));
    // dispatch(setPositionX(position));
    setText("");
  };
  return (
    <div className={style.search_container} style={mod ? {display:"none"}:{display:"block"}}>
      <ul
        id="list"
        className={style.list_container}
        style={
          text === "" || status === false
            ? { display: "none" }
            : { display: "block" }
        }
      >
        {text === ""
          ? ""
          : planets
              .filter((item) => item.name.toLowerCase().includes(text))
              .map((item, index) => {
                return (
                  <li id="list_item" key={item.id} className={style.list_item}>
                    <button
                      onClick={() => handleClick(item.id,2000*item.distance)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
      </ul>
      <input
        onChange={(e) => setText(e.target.value.toLowerCase())}
        className={status ? style.search_active : style.search_passive}
        type="text"
        placeholder="SEARCH PLANETS"
        autoComplete="off"
        value={text}
      />
    </div>
  );
};

export default Search;
