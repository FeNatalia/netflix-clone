// NPM Package
import { Link } from "react-router-dom";

export default function AdminVideoItem({ item, to, onClick}) {
  const { title, imageURL } = item;

  return (
    <section className="admin-video-item" onClick={onClick} >
      <img id="video-image" src={imageURL} alt="Video thumbnail" />
      <div>
        <h3>{title}</h3>
      </div>
        <div id="edit-link">
            <Link className="button-details" to={to}>
              Edit item
            </Link>
        </div>
    </section>
  );
}