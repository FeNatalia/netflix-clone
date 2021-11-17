// NPM package
import YouTube from "react-youtube";

export default function SerieItem({ item }) {
  // Video size
  const opts = {
    height: "120",
    width: "210",
  };
  return (
    <div id="serie-item">
      <div>
        <YouTube opts={opts} videoId={item.videoURL} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
