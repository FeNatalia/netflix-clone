// NPM Packages
import { useCallback, useEffect } from "react";
//import { Link } from "react-router-dom";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useStreaming } from "state/StreamingProvider";
//import VideoItem from "components/VideoItem";
//import UserVideoItems from "components/UserVideoItems";
import AdminScreen from "screens/AdminScreen";
import UserScreen from "screens/UserScreen";

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

  return (
    <div id="home-page">
      
      {user.isAdmin ? <AdminScreen videos={videos}/> : <UserScreen videos={videos}/>}
      {/*<p>You logged in as {user.name}</p>*/}
    </div>
  );
}



