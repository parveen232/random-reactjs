import CurrentDate from "./CurrentDate";
import FilterList from "./FilterList";
import Gallery from "./Gallery";
import List from "./List";

export default function App() {
  const type = ["nature", "space", "history", "architecture", "furniture"];

  return (
    <div>
      <h1>Random ReactJS</h1>
      <CurrentDate />
      <List type={type}/>
      <label htmlFor="gallery-size">Enter Gallery Size:</label>
      <input type="number" name="gallery-size" id="gallery-size" />
      <Gallery size={7} type={type}/>
      <FilterList />
    </div>
  );
}
