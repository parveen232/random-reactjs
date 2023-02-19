export default function GalleryButton() {
  function handleClick() {
    alert("button clicked");
  }

  return (
    <button onClick={handleClick} className="g-btn">
      Show Gallery
    </button>
  );
}
