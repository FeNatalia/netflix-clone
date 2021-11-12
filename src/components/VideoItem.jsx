// NPM Package
import { Link } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";

export default function CourseItem({ item, to }) {
  const { description, title, imageURL } = item;
  const { user } = useAuth();

  return (
    <section className="video-item">
      <img id="video-image" src={imageURL} alt="Video thumbnail" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {user.isAdmin && (
          <div id="edit-link">
            <Link className="button-details" to={to}>
              Edit item
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}