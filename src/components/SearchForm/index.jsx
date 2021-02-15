import { useState, useContext } from "react";
import { StoreContext } from "../../store/context";
import styled from 'styled-components'

const SearchForm = () => {
  
  const [ inputValue, setInput ] = useState("");
  const { actions } = useContext(StoreContext);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.getResults(inputValue)
  }

  return (
    <form>
      <Label htmlFor="search">Search Repositories</Label>
      <Input type="text" placeholder="🔍 Github" onChange={handleInputChange} value={inputValue} name="search" id="search"  />
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
    </form>
  )
}

const Label = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
const Input = styled.input`
  background-color: transparent;
  border: solid 2px #2f58eb;
  border-radius: 32px 0 0 32px;
  background: white;
  color: #2f58eb;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  outline: none;
  padding: 10px 20px;
  max-width: 300px;
  min-width: 200px;
  text-rendering: geometricPrecision;
  transition: 0.2s all ease-out;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #ecf0fd;
  }
  &:disabled {
    opacity: .4;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  background-color: #2f58eb;
  border: solid 2px #2f58eb;
  border-left: none;
  border-radius: 0 32px 32px 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  outline: none;
  padding: 10px 40px;
  text-transform: uppercase;
  text-rendering: geometricPrecision;
  transition: 0.2s all ease-out;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #ffffff;
    color: #2f58eb;
  }
  &:disabled {
    opacity: .4;
    cursor: not-allowed;
  }
`;

export default SearchForm;