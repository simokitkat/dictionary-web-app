/* eslint-disable react/prop-types */
import linkImg from "../../assets/images/icon-new-window.svg";

export default function Source({ sources }) {
  return (
    <div className="sources">
      {sources[0] && (
        <div className="source">
          <span>Source</span>
          <a href={sources[0]} target="_blank" rel="noreferrer">
            {sources[0]}
            <img src={linkImg} alt="link icon" />
          </a>
        </div>
      )}
    </div>
  );
}
