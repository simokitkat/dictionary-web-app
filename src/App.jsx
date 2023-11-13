import { useEffect } from "react";
import { useGlobalContext } from "./components/AppContext/AppContext";
import "./global-styles.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import DictionaryResponse from "./components/DictionaryResponse/DictionaryResponse";

function App() {
  const { isDark, font, bodyClass, setBodyClass } = useGlobalContext();

  document.body.classList = bodyClass;
  useEffect(() => {
    if (isDark) {
      setBodyClass(font + " dark");
    } else {
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
