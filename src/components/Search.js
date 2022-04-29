import { Link } from 'react-router-dom';

const tacosroute = '/tacos';
const tacosType = ['pastor', 'cochinita', 'suadero'];

const Search = () => {

  return (
    <div>
      <h2>Search</h2>
      <ul>
        {
          tacosType.map(t => (
            <li key={t}>
              <Link to={`${tacosroute}/${t}`}>{t}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Search;