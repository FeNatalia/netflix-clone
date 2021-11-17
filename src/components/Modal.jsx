// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  if (child === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal">
          <div className="corner-button">
            <button onClick={() => setChild(null)}>&#x2715;</button>
          </div>
          {child}
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
}
