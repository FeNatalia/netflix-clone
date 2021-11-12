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

  return (
    <div id="video-page">
        <div className="video-container">
            <YouTube videoId={video.videoURL} />
        </div>
        <h1>{video.title}</h1>
        <p>{video.description}</p>
    </div>
  );
}