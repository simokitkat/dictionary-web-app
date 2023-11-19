import "./form.scss";
import search from "../../assets/images/icon-search.svg";
import { useGlobalContext } from "../AppContext/AppContext";
import useFetchData from "./useFetchData";

export default function Form() {
  const {
    font,
    word,
    setWord,
    isEmpty,
    setIsEmpty,
    isDark,
    setIsLoading,
    setIsError,
  } = useGlobalContext();
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const getWord = useFetchData(url);

  const handleWordChange = (e) => {
    setIsEmpty(false);
    setIsLoading(false);
    setIsError(false);
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word === "") {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }

    getWord();
  };

  return (
    <form onSubmit={handleSubmit} className={isDark ? "dark" : ""}>
      <input
        type="text"
        name="search"
        className={font}
        placeholder="Search for any word…"
        value={word}
        onChange={handleWordChange}
      />
      <img src={search} alt="search icon" onClick={handleSubmit} />
      <span className={isEmpty ? `empty ${font}` : font}>
        Whoops, can’t be empty…
      </span>
    </form>
  );
}
