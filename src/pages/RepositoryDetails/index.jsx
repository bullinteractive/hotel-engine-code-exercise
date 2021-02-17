import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { FaStar, FaCode } from 'react-icons/fa';
// import "./index.styles.scss";

import { StoreContext } from "../../store/context";

const RepositoryDetails = () => {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  
  const { state, actions } = useContext(StoreContext);
  const [ currentRepository, setCurrentRepository ] = useState();

  // Gets queries from the URL to load posts if lands on page via a direct URL
  const query = useQuery();
  const name = query.get("name");
  const login = query.get("user");

  const { search } = state;
  const { selectedRepository } = search;
  console.log(selectedRepository )

  useEffect(() => {
    setCurrentRepository(selectedRepository);
    Object.keys(selectedRepository).length === 0
    && actions.getSingleResult({name, login});
  }, []);

  const test = currentRepository ? currentRepository : selectedRepository

  const { 
    name: repoTitle = "", 
    description = "", 
    language = "", 
    stargazers_count = "", 
  } = test;

  return (
    <div className="repository-details">
      <h2>{repoTitle}</h2>
      <p>{description}</p>
      <div className="meta-details">
        {language && (<span><i><FaCode /></i>{language}</span> )}
        <span><i><FaStar /></i>{stargazers_count}</span>
      </div>
    </div>
  )
}

export default RepositoryDetails
