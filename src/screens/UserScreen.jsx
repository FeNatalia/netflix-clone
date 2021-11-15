// NPM Packages
import { useState } from "react";

import VideoItem from "components/VideoItem";
import VideoModal from "components/VideoModal";
import Modal from "components/Modal";
import Play from "assets/Play.png";

export default function UserScreen({ videos }) {

  // Local state
  const [modal, setModal] = useState(null);

          // Methods
          function onProject(item) {
            setModal(<VideoModal video={item} />);
        }

    const banner = videos.filter((item) => item.id === "IFcozmOiElFcWL5kFDjf").map(item => (
        <header id="banner">
          <div className="hero">
            <img src={item.imageURL} alt="Video thumbnail" />
          </div>
          <div id="banner-info">
            <h1>{item.title}</h1>
            <h3>#1 in Movies Today</h3>
            <p>{item.description}</p>
            <img src={Play} alt="play button" onClick={() => onProject(item)}/>
          </div>
        </header>
      ));

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
      <div>
        {banner}
        <div className="home-page-content">
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
        </div>
        <Modal state={[modal, setModal]} />
      </div>
    )
  }