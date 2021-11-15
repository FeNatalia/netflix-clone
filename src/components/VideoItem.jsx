// NPM Package
import { Link } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";

export default function VideoItem({ item, to, onClick}) {
  const { description, title, imageURL } = item;
  const { user } = useAuth();

  return (
    <section className="video-item" onClick={onClick} >
      <div id="video-image">
        <img src={imageURL} alt="Video thumbnail" />
      </div>
      {/*<div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>*/}
        {user.isAdmin && (
          <div id="edit-link">
            <Link className="button-details" to={to}>
              Edit item
            </Link>
          </div>
        )}
    </section>
  );
}