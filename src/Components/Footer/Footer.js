import React from "react";
import style from "./style.module.scss";
import { github, linkedin } from "../../Assets/svg/svg";
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer_top}></div>
      <div className={style.footer_bottom}>
        <div className={style.contact}>
          <h2>CONTACT ME</h2>
          <ul className={style.buttons}>
            <li>
              <a
                href="https://github.com/canbayazit"
                target="_blank"
                rel="noreferrer"
              >
                {github}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/canbayazit/"
                target="_blank"
                rel="noreferrer"
              >
                {linkedin}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer_bottom_center}>
          <div className={style.logo}></div>
          <div className={style.line}></div>
          <div className={style.description}>
            <p>
              Invented and Developed <br /> <span>by Can Bayazit</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
