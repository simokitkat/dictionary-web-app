import arrow from "../../assets/images/icon-arrow-down.svg";
import { useGlobalContext } from "../AppContext/AppContext";
import { fonts } from "./fonts";

export default function Font() {
  const { isClicked, setIsClicked, font, setFont, chosenFont, setChosenFont } =
    useGlobalContext();

  function handleClick(object) {
    setIsClicked(!isClicked);
    setChosenFont(object.fontName);
    setFont(object.class);
  }

  return (
    <div className="font">
      <div className={font}>
        <h1 className="chosen-font" onClick={() => setIsClicked(!isClicked)}>
          {chosenFont}
        </h1>
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
  );
}
