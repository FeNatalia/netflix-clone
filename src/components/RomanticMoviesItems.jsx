// NPM Packages
import { useRef, useState } from "react";
// Project Files
import VideoItem from "./VideoItem";

export default function RomanticMoviesItems({videos, onProject}){
    const elementRef = useRef(null);
const [arrowDisable, setArrowDisable] = useState(true);
    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (element.scrollLeft === 0) {
            setArrowDisable(true);
          } else {
            setArrowDisable(false);
          }
        }, speed);
      };

    const RomanceItems = videos.filter(video=> (video.genre.toLowerCase()).includes("romance")).map((item) => (
        <VideoItem key={item.id} item={item} onClick={() => onProject(item)}/>
        ));
    return(
        <div>
            
            <div class="button-contianer">
        <button className="left"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          &#5176;
        </button>
        <button className="right"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          &#5171;
        </button>
        <h2>Romantic movies</h2>
        </div>
            <div className="movies" ref={elementRef}>
                {RomanceItems}
            </div>
        </div>
    )
}