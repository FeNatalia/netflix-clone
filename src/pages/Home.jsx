// NPM Packages
import { useCallback, useEffect, useState } from "react";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useStreaming } from "state/StreamingProvider";
import AdminScreen from "screens/AdminScreen";
import UserScreen from "screens/UserScreen";

export default function Home() {
  // Global state
  const { user } = useAuth();
  const { videos } = useStreaming();
  const { dispatch, dispatch2 } = useStreaming();
  const [series, setSeries] = useState([]);

  // Local state
  const path = "videos";
  const path2 = "series";

  // Methods
  const fetchData = useCallback(
    async (path) => {
      const videos = await getCollection(path);
      dispatch({ type: "SET_VIDEOS", payload: videos });
    },
    [dispatch]
  );

  useEffect(() => fetchData(path), [fetchData]);

  const fetchDataSeries = useCallback(
    async (path2) => {
      const series = await getCollection(path2);
      setSeries(series);
      dispatch2({ type: "SET_DISHES", payload: series });
    },
    [dispatch2]
  );

  useEffect(() => fetchDataSeries(path2), [fetchDataSeries]);

  return (
    <div id="home-page">
      {user.isAdmin ? (
        <AdminScreen videos={videos} />
      ) : (
        <UserScreen videos={videos} series={series} />
      )}
      {/*<p>You logged in as {user.name}</p>*/}
    </div>
  );
}
