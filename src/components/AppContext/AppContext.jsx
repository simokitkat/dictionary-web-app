/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("sans-serif");
  const [chosenFont, setChosenFont] = useState("Sans Serif");
  const [isClicked, setIsClicked] = useState(false);
  const [bodyClass, setBodyClass] = useState(font);
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [wordDetails, setWordDetails] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        setIsDark,
        bodyClass,
        setBodyClass,
        font,
        setFont,
        isClicked,
        setIsClicked,
        chosenFont,
        setChosenFont,
        word,
        setWord,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        isEmpty,
        setIsEmpty,
        wordDetails,
        setWordDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
