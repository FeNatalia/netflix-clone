// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Project files
import videosReducer from "state/videosReducer";

// Properties
const StreamingContext = createContext(null);

export function StreamingProvider({ children }) {
  // Local state
  const [videos, dispatch] = useReducer(videosReducer, []);

  return (
    <StreamingContext.Provider value={{ videos, dispatch }}>
      {children}
    </StreamingContext.Provider>
  );
}

export function useStreaming() {
  const context = useContext(StreamingContext);

  return context;
}