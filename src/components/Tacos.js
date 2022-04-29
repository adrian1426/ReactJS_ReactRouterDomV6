import { useParams } from 'react-router-dom';

const Tacos = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Tacos</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default Tacos;