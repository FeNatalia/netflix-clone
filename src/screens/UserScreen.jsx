// NPM Packages
import { useState } from "react";
// Project Files
import VideoModal from "components/VideoModal";
import Modal from "components/Modal";
import Play from "assets/Play.png";
import AllMoviesItems from "components/AllMoviesItems";
import RomanticMoviesItems from "components/RomanticMoviesItems";
import ChristmasMovies from "components/ChristmasMovies";
import TVShowItems from "components/TVShowItems";

export default function UserScreen({ videos, series }) {
  // Local state
  const [modal, setModal] = useState(null);
  // Methods
  function onProject(item) {
    setModal(<VideoModal video={item} />);
  }
  // Components
  const banner = videos
    .filter((item) => item.id === "IFcozmOiElFcWL5kFDjf")
    .map((item) => (
      <header id="banner">
        <div className="hero">
          <img src={item.imageURL} alt="Video thumbnail" />
        </div>
        <div id="banner-info">
          <h1>{item.title}</h1>
          <h3>#1 in Movies Today</h3>
          <p>{item.description}</p>
          <img src={Play} alt="play button" onClick={() => onProject(item)} />
        </div>
      </header>
    ));
  return (
    <div id="user-home">
      {banner}
      <div className="home-page-content">
        <div className="all-categories">
          <AllMoviesItems videos={videos} onProject={onProject} />
          <RomanticMoviesItems videos={videos} onProject={onProject} />
          <ChristmasMovies videos={videos} onProject={onProject} />
          <TVShowItems series={series} onProject={onProject} />
        </div>
      </div>
      <Modal state={[modal, setModal]} />
    </div>
  );
}
