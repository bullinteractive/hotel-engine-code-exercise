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

    // const [ inputValue, setInput ] = useState("");
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

// The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

SingleResult.propTypes = {
  result: PropTypes.object.isRequired
}

export default SingleResult
