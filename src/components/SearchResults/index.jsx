import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/context";

import SingleResult from "./components/SingleResult";

import { Loader } from "../../utilities/Loader";
import { NoResultsComponent } from "../../utilities/NoResults";

import "./index.styles.scss";

const SearchResults = () => {
  
  const { state, actions } = useContext(StoreContext);
  
  // Destructured state coming from context API
  const { meta, search } = state;
  const { isLoadingSearchResults, errorMessage } = meta;
  const { searchResults, searchQuery, searchFilters } = search;

  const [ results, setResults ] = useState([]);
  const [ selectedLanguages, setSelectedLanguages ] = useState([]);
  const [ sortOrder, setSortOrder ] = useState("desc");  
  
  useEffect(() => {
    // Sets results loaded from the API
    setResults(searchResults.items)
    // Sets the languages pulled out from the results array in the reducer
    setSelectedLanguages(searchFilters);
  }, [isLoadingSearchResults, searchResults, searchFilters]);

  // Filters the results my languages selected
  const handleLanguageFilter = (language) => {
    setSelectedLanguages(selectedLanguages.includes(language) ? selectedLanguages.filter(i => i !== language) : [ ...selectedLanguages, language ]);
  };

  
  const handleSort = (search, sort, order) => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    actions.getSortedResults({search, sort, order})
  }

  const resultsList = results && results.length ? (
    <ul className="results-list">
      {
        results.filter(result => selectedLanguages
          ? selectedLanguages.includes(result.language)
          : result )
          .map(result => (
            <SingleResult key={result.id} result={result} />
          )
        )
      }
    </ul> 
  ) : null;
  
  const languageFilter = searchFilters && searchFilters.length ? (
    <>
      <p className="label">Filter By:</p>
      <ul className="language-list">
        {
          searchFilters
            .map((language, i) => (
            <li key={language} tabIndex={i+1} className={`language ${!selectedLanguages.includes(language) ? 'excluded': "included"}`}  onClick={() => handleLanguageFilter(language)}>{language}</li>
          ))
        }
      </ul> 
    </>
  ) : null;
  const sortBy = "stars";
  console.log(sortOrder);
  const repositorySorting = results && results.length ? (
    <>
      <p className="label">Sort By:</p>
      <div className="sort-options">
        <button type="button"
          onClick={() => handleSort({searchQuery, sortBy, sortOrder})}>Relevance</button>
        <button type="button" 
          onClick={() => handleSort(searchQuery, "stars", "desc")}>Stars</button>
      </div> 
    </>
  ) : null
  
  return (
    <div>
      { isLoadingSearchResults 
        ? <Loader className="loader" /> 
        : (searchQuery.length > 0 && !resultsList ) && <NoResultsComponent />
      }
      
      { languageFilter }

      { repositorySorting }

      { (!selectedLanguages.length && resultsList) && (<h4>Please select at least one language to see available repositories</h4>) }
      
      { (!errorMessage && searchQuery.length ) 
        ? resultsList 
        : errorMessage 
      }
    </div>
  )
}

export default SearchResults;