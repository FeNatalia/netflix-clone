// NPM package
//import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

// Project files
//import { useStreaming } from "state/StreamingProvider";

export default function VideoModal({video}) {
  // Global state
  //const { videos } = useStreaming();
  //const { videoId } = useParams();

  // Properties
  //const video = videos.find((item) => item.id === videoId);
  const opts = {
    height: "480",
    width: "850"
  }
  return (
    <div id="modal-popup">
        <div className="modal-img">
          <YouTube opts={opts} videoId={video.videoURL} />
        </div>
        <div className="modal-title">
          <h1>{video.title}</h1>
        </div>
        <div className="modal-body">
          <div className="modal-description">
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