import { useGlobalContext } from "../AppContext/AppContext";
import "./loading.scss";
import { CgSearchLoading } from "react-icons/cg";
export default function Loading() {
  const { isLoading, isDark } = useGlobalContext();

  const loadingClass =
    isLoading && isDark
      ? "loading dark"
      : !isLoading
      ? "loading  hidden"
      : "loading";

  return (
    <div className={loadingClass}>
      <CgSearchLoading className="loading__icon" />
      <h2>Loading...</h2>
      <p>Please wait while the content is being loaded.</p>
    </div>
  );
}
