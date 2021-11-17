// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Project files
import Information from "components/Information";
import { useStreaming } from "state/StreamingProvider";
import { createDocument, updateDocument } from "scripts/fireStore";
import YouTube from "react-youtube";

export default function EditPage() {
  // Global state
  const { id } = useParams();
  const { videos, dispatch } = useStreaming();
  const history = useHistory();

  // Local state
  const [profile, setProfile] = useState(findProfile(videos, id));

  // Methods
  function findProfile(videos, id) {
    const existingProfile = videos.find((item) => item.id === id);
    const newProfile = { title: "", description: "", imageURL: "" };

    return existingProfile === undefined ? newProfile : existingProfile;
  }

  function onSave(profile) {
    id === "new-profile" ? onCreateProfile(profile) : onUpdateProfile(profile);
    alert("Successfully saved!");
    (history.push("/"));
  }

  function onChange(key, value) {
    const field = { [key]: value };

    setProfile({ ...profile, ...field });
  }

  async function onCreateProfile(profile) {
    profile.id = await createDocument("videos", profile);
    dispatch({ type: "CREATE_PROFILE", payload: profile });
  }

  async function onUpdateProfile(profile) {
    await updateDocument("videos", profile);
    dispatch({ type: "UPDATE_PROFILE", payload: profile });
  }

  return (
    <div className="edit-page">
      <div className="edit-content">
      <section>
        {profile.videoURL !== undefined && profile.videoURL !== "" && <YouTube videoId={profile.videoURL} />}
      </section>
      <section>
        <Information profile={profile} onChange={onChange} />
        <div className="button-save">
          <button onClick={() => onSave(profile)} className="button-save">
            Save
          </button>
        </div>
        <div className="link-go-back">
          <Link to="/" id="button-add">
            Go back
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}