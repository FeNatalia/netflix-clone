// NPM Packages
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useStreaming } from "state/StreamingProvider";
import VideoItem from "components/VideoItem";
import VideoModal from "pages/VideoModal";
import Modal from "components/Modal";

export default function Home() {
  // Global state
  const { user } = useAuth();
  const { videos } = useStreaming();
  const { dispatch } = useStreaming();

  // Local state
  const path = "videos";
  const [modal, setModal] = useState(null);

  // Methods
  const fetchData = useCallback(
    async (path) => {
      const videos = await getCollection(path);
      dispatch({ type: "SET_VIDEOS", payload: videos });
    },
    [dispatch]
  );

  useEffect(() => fetchData(path), [fetchData]);

  // Components
  const VideoItems = videos.map((item) => (
    //<Link key={item.id} to={`/videos/${item.id}`}>
      <VideoItem key={item.id} item={item} onClick={() => onProject(item)}/>
    //</Link>
  ));

  const AdminVideoItems = videos.map((item) => (
    <VideoItem item={item} to={`edit/${item.id}`} />
  ));

    // Methods
    function onProject(item) {
        setModal(<VideoModal video={item} />);
    }

  return (
    <div id="home-page">
      <header>
        <h1>Home</h1>
      </header>
      <div className="home-page-content">
        <p>You logged in as {user.name}</p>
        <h2>My videos</h2>
        <div className="movies">
          {user.isAdmin ? AdminVideoItems : VideoItems}
        </div>
        {user.isAdmin && (
          <div id="add-video">
            <Link to="edit/new-profile">Add new video</Link>
          </div>
        )}
      </div>
      <Modal state={[modal, setModal]} />
    </div>
  );
}