import { useEffect } from "react";
import { useGlobalContext } from "./components/AppContext/AppContext";
import "./global-styles.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import DictionaryResponse from "./components/DictionaryResponse/DictionaryResponse";

function App() {
  const { isDark, setIsDark, font, bodyClass, setBodyClass } =
    useGlobalContext();

  document.body.classList = bodyClass;
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches || isDark) {
      setIsDark(true);
      setBodyClass(font + " dark");
    } else {
      setIsDark(false);
      setBodyClass(font + " light");
    }
  }, [font, isDark]);

  return (
    <main>
      <Header />
      <Form />
      <Loading />
      <Error />
      <DictionaryResponse />
    </main>
  );
}

export default App;
