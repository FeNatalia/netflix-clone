import AdminVideoItem from "components/AdminVideoItem";
import { Link } from "react-router-dom";

export default function AdminScreen( {videos}) {
      // Components
  const AdminVideoItems = videos.map((item) => (
    <AdminVideoItem item={item} to={`edit/${item.id}`} />
  ));
    return(
        <div id="admin-screen">
            <div id="add-video">
                <Link to="edit/new-profile">Add new video</Link>
            </div>
            <div className="admin-page-content">
                {AdminVideoItems}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
  }