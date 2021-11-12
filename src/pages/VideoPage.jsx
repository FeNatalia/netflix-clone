// NPM package
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Project files
import { useStreaming } from "state/StreamingProvider";

export default function VideoPage() {
  // Global state
  const { videos } = useStreaming();
  const { videoId } = useParams();

  // Properties
  const video = videos.find((item) => item.id === videoId);

  return (
    <div id="video-page">
      <img id="video-img" src={video.imageURL} alt="Video thumbnail" />
      <div className="course-content">
        <h1>{video.title}</h1>
        <p>{video.description}</p>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}