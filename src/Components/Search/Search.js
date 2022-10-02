import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClick, setPlanetIndex, setPosition } from "../../Store/PlanetSlice";
import style from "./style.module.scss";

const Search = () => {
  const { planets } = useSelector((store) => store.planets);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const li = document.getElementById("list_item");
    let status = document.getElementById("list").contains(li);
    status ? setStatus(true) : setStatus(false);
  }, [text]);
  const handleClick = (id, position) => {
    dispatch(setPlanetIndex(id - 1));
    dispatch(setClick(true));
    dispatch(setPosition(position));
    setText("");
  };
  return (
    <div className={style.search_container}>
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
                console.log("asd", index);
                return (
                  <li id="list_item" key={index} className={style.list_item}>
                    <button
                      onClick={() => handleClick(item.id, 1000 * item.distance)}
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
