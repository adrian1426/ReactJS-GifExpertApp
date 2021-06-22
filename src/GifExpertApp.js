import {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categorias,setCategorias]=useState(['One Punch','Samurai X','Dragon Ball']);


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        setCategorias={setCategorias}
      />
      <hr />

      <ol>
        {categorias.map(cat=><li key={cat}>{cat}</li>)}
      </ol>
    </>
  );
};

export default GifExpertApp;