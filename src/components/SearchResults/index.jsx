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
    setResults(searchResults.items)
  }, [isLoadingSearchResults, searchResults]);

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
  ) : "No results found. Please refine your search and try again.";
  const loadingMessage = "Loading";
  return (
    <div>
      <h1>Results</h1>
      {isLoadingSearchResults ? loadingMessage : resultsList}
    </div>
  )
}

export default SearchResults;