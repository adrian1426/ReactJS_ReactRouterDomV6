import { useParams, Link, Outlet } from 'react-router-dom';

const Tacos = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Tacos</h2>
      <h3>{name}</h3>

      <Link to='details'>Ir a más detalles</Link>

      <Outlet />
    </div>
  );
};

export default Tacos;