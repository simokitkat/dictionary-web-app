import logo from "../../assets/images/logo.svg";
import "./header.scss";
import { useGlobalContext } from "../AppContext/AppContext";
import Font from "./Font";
import Theme from "./Theme";

export default function Header() {
  const { isDark } = useGlobalContext();

  return (
    <header className={isDark ? "dark" : ""}>
      <img src={logo} alt="book icon" />
      <div className="font-and-theme">
        <Font />
        <span className="pipeline"></span>
        <Theme />
      </div>
    </header>
  );
}
