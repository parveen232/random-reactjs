export default function GalleryButton({ showGallery, handleShowClick }) {
  return (
    <button onClick={handleShowClick} className="g-btn btn">
      {showGallery ? "Hide" : "Show"} Gallery
    </button>
  );
}
