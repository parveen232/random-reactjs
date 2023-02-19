import GalleryButton from "./GalleryButton";
import GalleryImg from "./GalleryImg";
import { useState } from "react";

export default function Gallery({ size, type }) {
  const [showGallery, setShowGallery] = useState(false);

  function handleShowClick() {
    setShowGallery(!showGallery);
  }

  return (
    <section className="gallery">
      <GalleryButton
        showGallery={showGallery}
        handleShowClick={handleShowClick}
      />
      {showGallery && (
        <div>
          <h2>Amazing Gallery</h2>

          <div>
            <ul className="gallery-list">
              {[...Array(size).keys()].map((x, i) => (
                <li key={i}>
                  <GalleryImg randomType={type[i < 5 ? i : i % 5]} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
