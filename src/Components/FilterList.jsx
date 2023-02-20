import { people } from "../data.js";
// import { Fragment } from 'react';

export default function FilterList() {
  const fedevelopers = people.filter(
    (person) => person.profession === "Frontend Developer"
  );

  return (
    <div className="list">
      <h2 className="method">filter() || map()</h2>
      <h2>List of Frontend Developers</h2>
      <ul>
        {fedevelopers.map((x) => (
          <li className="list-item fl-item" key={x.id}>
            <img src={x.image} alt={x.name} className="fl-img" />
            <h4>{x.name}</h4>
            <p>({x.company})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
