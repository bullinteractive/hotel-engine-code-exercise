import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/context";

const SearchResults = () => {
  
  // const [ inputValue, setInput ] = useState("");
  const { state } = useContext(StoreContext);
  const { meta, search } = state;
  const { isLoadingSearchResults } = meta;
  const { searchResults } = search;
  const [results, setResults] = useState();

  
  useEffect(() => {
    // Update the document title using the browser API
    setResults(searchResults.items)
  }, [isLoadingSearchResults, searchResults]);

  // const handleInputChange = (e) => {
  //   const { value } = e.target;
  //   setInput(value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   actions.triggerAction(inputValue)
  // }
  console.table(results);
  const resultsList = results && results.length ? (
    <ul>
      {
        results.map(result => (
          <li>
            {result.name}
          </li>
          )
        )
        }
    </ul> 
  ) : "No results";
  const loadingMessage = "Loading";
  return (
    <div>
      <h1>Results</h1>
      {isLoadingSearchResults ? loadingMessage : resultsList}
    </div>
  )
}

export default SearchResults;