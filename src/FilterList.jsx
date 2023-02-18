import { people } from './data.js'

export default function FilterList() {
  const fedevelopers = people.filter(
    person => person.profession === "Frontend Developer"
  );

  return (
    <div className="list">
      <h2 className='method'>filter() || map()</h2>  
      <h2>List of Frontend Developers</h2>
      <ol>
        {fedevelopers.map((x) => (
            <li className="list-item" key={x.id}>
              {x.name}
            </li>
          ))}
      </ol>
    </div>
  );
}
