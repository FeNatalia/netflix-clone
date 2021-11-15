import UserVideoItems from "components/UserVideoItems";

export default function UserScreen({ setModal, videos }) {
    const banner = videos.filter((item) => item.id === "IFcozmOiElFcWL5kFDjf").map(banner => (
        <header id="banner"><img src={banner.imageURL} alt="Video thumbnail" /></header>
      ));

    return(
      <div>
        {banner}
        <div className="home-page-content">
          <UserVideoItems videos={videos} setModal={setModal}/>
        </div>
      </div>
    )
  }