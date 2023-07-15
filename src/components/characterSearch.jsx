import { useState } from "react"

export const CharacterSearch = ({onCharacterSearch}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) =>{

    setInputValue(event.target.value);

  }

  const onSubmit = (event) =>{
    event.preventDefault();
    if(inputValue.trim().length < 3) return;
    
    onCharacterSearch(inputValue.trim());
  }

  return (
    <div className="wrap-form">
      <form className="search-form" onSubmit={onSubmit}>
        <div className="group-form">
          <input 
            type="text" 
            className="inputBox" 
            placeholder="Find your favorite character"
            value={inputValue}
            onChange={onInputChange}
          />
          <button className="btn btn-submit" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
