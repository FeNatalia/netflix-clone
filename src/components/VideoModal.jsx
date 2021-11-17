// NPM package
import YouTube from "react-youtube";

export default function VideoModal({ video }) {
  // Video size
  const opts = {
    height: "480",
    width: "850",
  };
  return (
    <div id="modal-popup">
      <div className="modal-img">
        <YouTube opts={opts} videoId={video.videoURL} />
      </div>
      <div className="modal-title">
        <h1>{video.title}</h1>
      </div>
      <div className="gradient"></div>
      <div className="modal-body">
        <div className="modal-description">
          <p>{video.year}</p>
          <p>{video.description}</p>
        </div>
        <div className="modal-details">
          <span>
            <p className="gray">Cast: </p>
            <p>{video.cast}</p>
          </span>
          <span>
            <p className="gray">Genres: </p>
            <p>{video.genre}</p>
          </span>
        </div>
      </div>
    </div>
  );
}