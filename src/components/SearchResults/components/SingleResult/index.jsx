import PropTypes from 'prop-types'
import { FaStar, FaUser, FaCode } from 'react-icons/fa';
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


  const handleLoadPost = (e) => {
    e.preventDefault();
    actions.getSingleResult({name, login})
  }

  return (
    <li key={id} className="single-result" onClick={handleLoadPost}>
      <h2>{name}</h2>
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
