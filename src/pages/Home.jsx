// NPM Packages
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useStreaming } from "state/StreamingProvider";
import VideoItem from "components/VideoItem";

export default function Home() {
  // Global state
  const { user } = useAuth();
  const { videos } = useStreaming();
  const { dispatch } = useStreaming();

  // Local state
  const path = "videos";

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
  const CourseItems = videos.map((item) => (
    <Link key={item.id} to={`/videos/${item.id}`}>
      <VideoItem key={item.id} item={item} />
    </Link>
  ));

  const AdminVideoItems = videos.map((item) => (
    <VideoItem item={item} to={`edit/${item.id}`} />
  ));

  return (
    <div id="home-page">
      <header>
        <h1>Home</h1>
      </header>
      <div className="home-page-content">
        <p>You logged in as {user.name}</p>
        <h2>My videos</h2>
        <div className="movies">
          {user.isAdmin ? AdminVideoItems : CourseItems}
        </div>
        {user.isAdmin && (
          <div id="add-video">
            <Link to="edit/new-profile">Add new video</Link>
          </div>
        )}
      </div>
    </div>
  );
}