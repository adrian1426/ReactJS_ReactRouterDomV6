import { useParams } from 'react-router-dom';

const TacosDetail = () => {
  const { name } = useParams();

  return (
    <div>
      Detalles Tacos de {name}
    </div>
  );
};

export default TacosDetail;