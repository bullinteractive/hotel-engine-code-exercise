import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { FaStar, FaUser, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import "./index.styles.scss";

import {  useContext } from "react";
import { StoreContext } from "../../../../store/context";

const SingleResult = ({result}) => {
  const { 
    id, 
    name, 
    description, 
    language, 
    stargazers_count, 
    owner: { 
      login
    } 
  } = result;

  const { actions } = useContext(StoreContext);

  // "Preloads" the post on hover to save a API call
  const handlePreloadSingleRepo = (result) => {
    actions.preloadSingleResult(result)
  }

  return (
    <li key={id} className="single-result" 
      onMouseEnter={() => handlePreloadSingleRepo(result)} 
      >
      <Link to={`repository?name=${name}&user=${login}`}><h2>{name} <i><FaExternalLinkAlt /></i></h2></Link>
      <p>{description}</p>
      <div className="meta-details">
        {language && (<span><i><FaCode /></i>{language}</span> )}
        <span><i><FaUser /></i>{login}</span>
        <span><i><FaStar /></i>{stargazers_count}</span>
      </div>
    </li>
  )
}

SingleResult.propTypes = {
  result: PropTypes.object.isRequired
}

export default SingleResult
