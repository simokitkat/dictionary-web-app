import "./form.scss";
import search from "../../assets/images/icon-search.svg";
import { useGlobalContext } from "../AppContext/AppContext";

export default function Form() {
  const {
    font,
    word,
    setWord,
    setWordDetails,
    setIsLoading,
    setIsError,
    isEmpty,
    setIsEmpty,
    isDark,
  } = useGlobalContext();

  const handleWordChange = (e) => {
    setIsEmpty(false);
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    console.log(url);

    if (word === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    async function getWord() {
      setIsLoading(true);
      try {
        const request = await fetch(url);

        if (!request.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await request.json();
        console.log(response);

        setWordDetails(response);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.log(error);

        setIsLoading(false);
        setIsError(true);
      }
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
      <img src={search} alt="search icon" />
      <span className={isEmpty ? `empty ${font}` : font}>
        Whoops, can’t be empty…
      </span>
    </form>
  );
}
