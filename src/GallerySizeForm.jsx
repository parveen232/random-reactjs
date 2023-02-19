export default function GallerySizeForm() {
  return (
    <div className="gs-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting!");
        }}
      >
        <label htmlFor="gallery-size" id="gs-label">
          Enter Gallery Size:
        </label>
        <input type="number" name="gallery-size" id="gallery-size" min="0" max="12" />
        <button className="g-btn">Submit</button>
      </form>
    </div>
  );
}
