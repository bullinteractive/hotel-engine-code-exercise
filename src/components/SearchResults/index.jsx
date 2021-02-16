import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/context";

import SingleResult from "./components/SingleResult";

import { Loader } from "../../utilities/Loader";
import { NoResultsComponent } from "../../utilities/NoResults";

import "./index.styles.scss";

const SearchResults = () => {
  
  const { state } = useContext(StoreContext);
  
  // Destructured state coming from context API
  const { meta, search } = state;
  const { isLoadingSearchResults, errorMessage } = meta;
  const { searchResults, searchQuery, searchFilters } = search;

  const [results, setResults] = useState();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  
  useEffect(() => {
    // Sets results loaded from the API
    setResults(searchResults.items)
    // Sets the languages pulled out from the results array in the reducer
    setSelectedLanguages(searchFilters);
  }, [isLoadingSearchResults, searchResults, searchFilters]);

  const handleLanguageFilter = (arr, item) => {
    setSelectedLanguages(arr.includes(item) ? arr.filter(i => i !== item) : [ ...arr, item ]);
    console.log(selectedLanguages);
    // TODO: get filtered to update list properly
    const filteredRepos = results
    .filter(repo => 
      (repo.language != null && repo.language === item) && repo)
      console.log(filteredRepos)
    setResults(filteredRepos)
  };




  const resultsList = results && results.length ? (
    <ul className="results-list">
      {
        results.map(result => (
          <SingleResult key={result.id} result={result} />
          )
        )
      }
    </ul> 
  ) : null;
  
  const languageList = searchFilters && searchFilters.length ? (
    <ul className="language-list">
      {
        searchFilters.map(language => (
          <li key={language} onClick={() => handleLanguageFilter(selectedLanguages, language)}>{language}</li>
        ))
      }
    </ul> 
  ) : null;
  return (
    <div>
      { isLoadingSearchResults 
        ? <Loader className="loader" /> 
        : (searchQuery.length > 0 && !resultsList ) && <NoResultsComponent />
      }
      {languageList}
      { (!errorMessage && searchQuery.length ) 
        ? resultsList 
        : errorMessage 
      }
    </div>
  )
}

export default SearchResults;