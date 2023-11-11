/* eslint-disable react/no-unescaped-entities */
import "./error.scss";
import smiley_face from "../../assets/images/smiley.png";
import { useGlobalContext } from "../AppContext/AppContext";

export default function Error() {
  const { isError, isDark } = useGlobalContext();

  const errorClass =
    isError && isDark ? "error dark" : !isError ? "error  hidden" : "error";

  return (
    <div className={errorClass}>
      <img src={smiley_face} alt="error icon" />
      <h2>No Definitions Found</h2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
