import React from 'react';

const GifGrid = (props) => {
  const {category}=props;

  const getGifs=async()=>{
    const url= 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=TLMf5a0DXObczQXurI1drrG4WvQcUsDR';
    const respuesta= await fetch(url);
    const {data}= await respuesta.json();

    const gifs=data.map(image=>{
      return{
        id:image.id,
        title:image.title,
        url:image.images.downsized_medium.url
      };
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;