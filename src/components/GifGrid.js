import {useEffect,useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = (props) => {
  const [images,setImages]=useState([]);

  const {category}=props;

  useEffect(()=>{
    getGifs(category)
    .then(setImages);

  },[category]);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
          {
            images.map(img=>(
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