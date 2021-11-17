export default function VideoItem({ item, to, onClick }) {
  const { title, imageURL } = item;

  return (
    <section className="video-item" onClick={onClick}>
      <div id="video-image">
        <img src={imageURL} alt="Video thumbnail" />
        <h3>{title}</h3>
      </div>
    </section>
  );
}