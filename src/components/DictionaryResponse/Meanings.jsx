/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { useGlobalContext } from "../AppContext/AppContext";

export default function Meanings({ meanings }) {
  const { font } = useGlobalContext();

  return (
    <div className="meanings">
      {meanings.map((meaning) => {
        return (
          <div className="meaning" key={nanoid()}>
            <div className="speech">
              <h3 className={font}>{meaning.partOfSpeech}</h3>
              <span className="line"></span>
            </div>
            <span>Meaning</span>
            {meaning.definitions.map((definition) => {
              return (
                <div className="definition" key={nanoid()}>
                  <ul>
                    <li>{definition.definition}</li>
                  </ul>
                  {definition.example && (
                    <div className="example">
                      <p>{`“${definition.example}”`}</p>
                    </div>
                  )}
                </div>
              );
            })}
            {meaning?.synonyms?.length > 0 && (
              <div className="synonyms">
                <span>Synonyms</span>
                <p>{meaning.synonyms.join(", ")}</p>
              </div>
            )}
            {meaning?.antonyms?.length > 0 && (
              <div className="antonyms">
                <span>Antonyms</span>
                <p>{meaning.antonyms.join(", ")}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
