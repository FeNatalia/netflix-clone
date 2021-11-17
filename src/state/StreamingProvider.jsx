// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Project files
import videosReducer from "state/videosReducer";
import seriesReducer from "state/seriesReducer";

// Properties
const StreamingContext = createContext(null);

export function StreamingProvider({ children }) {
  // Local state
  const [videos, dispatch] = useReducer(videosReducer, []);
  const [series, dispatch2] = useReducer(seriesReducer, []); // hold the specific document

  return (
    <StreamingContext.Provider value={{ videos, dispatch, series, dispatch2 }}>
      {children}
    </StreamingContext.Provider>
  );
}

export function useStreaming() {
  const context = useContext(StreamingContext);

  return context;
}
