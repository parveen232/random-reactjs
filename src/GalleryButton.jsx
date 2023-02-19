export default function GalleryButton({ showGallery, handleShowClick }) {
  return (
    <button onClick={handleShowClick} className="g-btn">
      {showGallery ? "Hide" : "Show"} Gallery
    </button>
  );
}
