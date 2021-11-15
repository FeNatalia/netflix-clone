import VideoItem from "./VideoItem";
import VideoModal from "components/VideoModal";

export default function UserVideoItems({ videos, setModal }){
        // Methods
        function onProject(item) {
            setModal(<VideoModal video={item} />);
        }
    // Components
        const AllItems = videos.map((item) => (
            <VideoItem key={item.id} item={item} onClick={() => onProject(item)}/>
          ));

  const RomanceItems = videos.filter(video=> (video.genre.toLowerCase()).includes("romance")).map((item) => (
    <VideoItem key={item.id} item={item} onClick={() => onProject(item)}/>
  ));

  const ChristmasItems = videos.filter(video=> (video.genre.toLowerCase()).includes("christmas")).map((item) => (
    <VideoItem key={item.id} item={item} onClick={() => onProject(item)}/>
  ));
    return(
        <div className="all-categories">
          <h2>All movies</h2>
          <div className="movies">
            {AllItems}
          </div>
          <h2>Romantic movies</h2>
          <div className="movies">
            {RomanceItems}
          </div>
          <h2>Christmas Movies</h2>
          <div className="movies">
            {ChristmasItems}
          </div>
        </div>
    )
}