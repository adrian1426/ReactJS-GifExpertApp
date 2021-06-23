import {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categorias,setCategorias]=useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        setCategorias={setCategorias}
      />
      <hr />

      <ol>
        {categorias.map(cat=>
          <GifGrid 
            category={cat}
            key={cat}
          />
        )}
      </ol>
    </>
  );
};

export default GifExpertApp;