import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = (props) => {
  const { category } = props;
  const { loading, data:imagenes } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {
          imagenes.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  );
};

export default GifGrid;