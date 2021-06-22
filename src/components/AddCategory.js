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
      setCategorias(categorias=>[...categorias,inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
};

AddCategory.propTypes={
  setCategorias:PropTypes.func.isRequired
};

export default AddCategory;