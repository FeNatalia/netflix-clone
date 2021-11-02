export default function videosReducer(state, action) {
  switch (action.type) {
    case "CREATE_PROFILE":
      return createProfile(state, action);
    case "UPDATE_PROFILE":
      return updateProfile(state, action);
    case "SET_VIDEOS":
      return setVideos(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createProfile(state, action) {
  const { payload } = action;

  return [...state, payload];
}

function updateProfile(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setVideos(action) {
  const { payload } = action;

  return payload;
}
