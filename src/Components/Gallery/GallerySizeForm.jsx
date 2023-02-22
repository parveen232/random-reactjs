import { useState } from "react";

export default function GallerySizeForm() {
  const [size, setSize] = useState(3);

  return (
    <div className="gs-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(size);
        }}
      >
        <label htmlFor="gallery-size" id="gs-label">
          Enter Gallery Size:
          <input
            type="number"
            name="gallery-size"
            id="gallery-size"
            min="0"
            max="20"
            value={size}
            placeholder="Size"
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <button className="g-btn">Submit</button>
      </form>
    </div>
  );
}
