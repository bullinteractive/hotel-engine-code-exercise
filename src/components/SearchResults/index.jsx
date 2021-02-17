import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/context";

import { FaSort, FaFilter, FaArrowDown, FaArrowUp } from 'react-icons/fa';

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
  const [ sortedBy, setSortedBy ] = useState("best-match");  
  
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

  
  const handleSort = (search) => {
    const { sortBy, sortOrder } = search;
    setSortedBy(sortBy);
    console.log(sortOrder);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    actions.getSortedResults({search})
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
      <p className="label filter-label"><i><FaFilter /></i>Filter By:</p>
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
  
  const arrow = sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />;
  const repositorySorting = results && results.length ? (
    <>
      <p className="label sort-label"><i><FaSort /></i> Sort By:</p>
      <div className="sort-options">
        <button type="button" className={sortedBy === "best-match" ? "active" : ""}
          onClick={() => handleSort({searchQuery, sortBy: "best-match", sortOrder})}>Relevance
          {arrow}
        </button>
        <button 
          type="button" 
          className={sortedBy === "stars" ? "active" : ""}
          onClick={() => handleSort({searchQuery, sortBy: "stars", sortOrder})}>Stars 
          {arrow}
        </button>
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