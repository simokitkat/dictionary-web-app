import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/icon-arrow-down.svg";
import "./header.scss";
import { useGlobalContext } from "../AppContext/AppContext";
import { Moon } from "../SVGs/SVGs";
import { fonts } from "./fonts";

export default function Header() {
  const {
    font,
    setFont,
    isDark,
    setIsDark,
    isClicked,
    setIsClicked,
    chosenFont,
    setChosenFont,
  } = useGlobalContext();

  function handleClick(object) {
    setIsClicked(!isClicked);
    setChosenFont(object.fontName);
    setFont(object.class);
  }

  return (
    <header className={isDark ? "dark" : ""}>
      <img src={logo} alt="book icon" />
      <div className="font-and-theme">
        <div className="font">
          <div className={font}>
            <span
              className="chosen-font"
              onClick={() => setIsClicked(!isClicked)}
            >
              {chosenFont}
            </span>
            <ul className={isClicked ? "active" : ""}>
              {fonts.map((font) => {
                return (
                  <li key={font.id} onClick={() => handleClick(font)}>
                    {font.fontName}
                  </li>
                );
              })}
            </ul>
          </div>
          <img src={arrow} className="arrow" alt="arrow icon" />
        </div>
        <span className="pipeline"></span>
        <div className="theme">
          <div className="theme-changer" onClick={() => setIsDark(!isDark)}>
            <span className="circle"></span>
          </div>
          <Moon />
        </div>
      </div>
    </header>
  );
}
