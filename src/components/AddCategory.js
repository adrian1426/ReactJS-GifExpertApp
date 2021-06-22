import {useState} from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputValue=e=>{
    setInputValue(e.target.value);
  };

  const handleSubmit=e=>{
    e.preventDefault();
    console.log('hecho submit');
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

export default AddCategory;