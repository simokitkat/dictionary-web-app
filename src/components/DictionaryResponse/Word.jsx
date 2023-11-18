/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { Play } from "../SVGs/SVGs";

export default function Word({ wordsArr, i, oneWord }) {
  const { phonetic, phonetics } = oneWord;

  const playablePhonetics = phonetics.filter((phoneticObject) => {
    return phoneticObject.audio && phoneticObject.text;
  });

  const handlePlayAudio = (audioObj) => {
    const audioFile = new Audio(audioObj.audio);
    audioFile.play();
  };

  return (
    <div className="word-phonetics">
      <div className="text">
        {wordsArr.length > 1 ? <h3>{`[${i + 1}]`}</h3> : ""}

        {playablePhonetics.length < 1 && <p>{phonetic}</p>}
      </div>
      {playablePhonetics.length > 0 && (
        <div className="phonetics">
          {playablePhonetics.map((phoneticObject) => {
            return (
              <div className="phonetic" key={nanoid()}>
                <p>{phoneticObject.text}</p>
                <Play handlePlayAudio={() => handlePlayAudio(phoneticObject)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
