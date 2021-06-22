import {useState} from 'react';

const GifExpertApp = () => {
  const [categorias,setCategorias]=useState(['One Punch','Samurai X','Dragon Ball']);

  const handleAdd=()=>{
    //las dos formas funcionan
    //setCategorias([...categorias,'Adrian super']);
    setCategorias(categ=>[...categ,'Adrian super man']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {
          categorias.map(cat=><li key={cat}>{cat}</li>)
        }
      </ol>
    </>
  );
};

export default GifExpertApp;