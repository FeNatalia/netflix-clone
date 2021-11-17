// NPM package
import YouTube from "react-youtube";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCollection } from "scripts/fireStore";
import { useStreaming } from "state/StreamingProvider";
import SerieItem from "components/SerieItem";

export default function VideoModal({ video }) {
  // Video size
  const opts = {
    height: "480",
    width: "850",
  };

  // Global state
  const { dispatch2 } = useStreaming();
  const [series, setTVSeries] = useState([]);
  const [status, setStatus] = useState(0);

  const path = `series/${video.id}/content`;

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const series = await getCollection(path);

      setTVSeries(series);
      dispatch2({ type: "SET_DISHES", payload: series });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);
  const SerieItems = series.map((item) => (
    <SerieItem key={item.id} item={item} />
  ));

  console.log("tvseries", series);

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
        {video.isSeries && (
          <div className="episodes">
            <h2>Episodes</h2>
            {SerieItems}
          </div>
        )}
      </div>
    </div>
  );
}
