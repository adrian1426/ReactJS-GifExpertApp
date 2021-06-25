import {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState('');
  const {setCategorias}=props;

  const handleInputValue=e=>{
    setInputValue(e.target.value);
  };

  const handleSubmit=e=>{
    e.preventDefault();
    
    if(inputValue.trim().length>0){
      setCategorias(categorias=>[inputValue,...categorias]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
        placeholder='Ingresa cualquier texto ejemplo(guko,naruto,mxico,barcelona,etc..)'
      />
    </form>
  );
};

AddCategory.propTypes={
  setCategorias:PropTypes.func.isRequired
};

export default AddCategory;