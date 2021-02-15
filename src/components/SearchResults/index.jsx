import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/context";
import SingleResult from "./components/SingleResult";
import "./index.styles.scss";

const SearchResults = () => {
  
  // const [ inputValue, setInput ] = useState("");
  const { state } = useContext(StoreContext);
  
  const { meta, search } = state;
  const { isLoadingSearchResults } = meta;
  const { searchResults } = search;

  const [results, setResults] = useState();

  console.log(search);
  
  useEffect(() => {
    setResults(searchResults.items)
  }, [isLoadingSearchResults, searchResults]);

  const resultsList = results && results.length ? (
    <ul className="results-list">
      {
        results.map(result => (
          <SingleResult key={result.id} result={result} />
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