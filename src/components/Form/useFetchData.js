import { useGlobalContext } from "../AppContext/AppContext";

export default function useFetchData(link) {
  const { setWordDetails, setIsLoading, setIsError } = useGlobalContext();

  async function getWord() {
    setIsLoading(true);
    try {
      const request = await fetch(link);

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

  return getWord;
}
