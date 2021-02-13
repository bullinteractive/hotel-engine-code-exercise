import { useState, useContext } from "react";
import { StoreContext } from "../../store/context";

const SearchForm = () => {
  
  const [ inputValue, setInput ] = useState("");
  const { actions } = useContext(StoreContext);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.triggerAction(inputValue)
  }

  return (
    <form>
      <input type="text" placeholder="Search" name="search" value={inputValue} 
        onChange={handleInputChange}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default SearchForm;