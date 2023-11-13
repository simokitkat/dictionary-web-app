import { nanoid } from "nanoid";
import { useGlobalContext } from "../AppContext/AppContext";
import "./dictionary-response.scss";
import Word from "./Word";
import Meanings from "./Meanings";
import Source from "./Source";

export default function DictionaryResponse() {
  const { wordDetails, isDark } = useGlobalContext();

  return (
    <div
      className={isDark ? "dictionary-response dark" : "dictionary-response"}
    >
      {wordDetails.map((word, index) => {
        return (
          <div key={nanoid()}>
            {index === 0 && <h2 className="main-word">{word.word}</h2>}
            <Word wordsArr={wordDetails} i={index} oneWord={word} />
            <Meanings meanings={word.meanings} />
            {index === wordDetails.length - 1 && (
              <Source sources={word.sourceUrls} />
            )}
          </div>
        );
      })}
    </div>
  );
}
