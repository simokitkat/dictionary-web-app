import { Moon } from "../SVGs/SVGs";
import { useGlobalContext } from "../AppContext/AppContext";

export default function Theme() {
  const { isDark, setIsDark } = useGlobalContext();

  return (
    <div className="theme">
      <div className="theme-changer" onClick={() => setIsDark(!isDark)}>
        <span className="circle"></span>
      </div>
      <Moon />
    </div>
  );
}
