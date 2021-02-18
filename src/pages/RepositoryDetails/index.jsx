import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { FaArrowAltCircleLeft, FaLink, FaStar, FaCode, FaEdit, FaCodeBranch, FaWeightHanging, FaExclamationTriangle, FaBinoculars, FaTags, FaGithub, FaCalendarAlt } from 'react-icons/fa';
import moment from "moment";
import "./index.styles.scss";

import { Container } from "../../layouts/Container";

import { StoreContext } from "../../store/context";

const RepositoryDetails = () => {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  
  const { state, actions } = useContext(StoreContext);

  const history = useHistory();

  // Gets queries from the URL to load posts if lands on page via a direct URL
  const query = useQuery();
  const name = query.get("name");
  const login = query.get("user");

  const { search } = state;
  const { selectedRepository } = search;

  useEffect(() => {
    Object.keys(selectedRepository).length === 0 && actions.getSingleResult({name, login});
  }, []);

  const { 
    name: repoName, 
    description, 
    language, 
    owner,
    html_url,
    git_url,
    stargazers_count, 
    forks_count,
    open_issues,
    size,
    created_at,
    updated_at,
    watchers_count,
    tags_url
  } = selectedRepository;

  const { login: userName, html_url: userUrl } =  owner || {};

  const createdTime = moment(created_at).fromNow();
  const updatedTime = moment(updated_at).fromNow();

  return (
    <Container>
      <div className="repository-details">
        <button onClick={() => history.goBack()} className="pill pill-link back-link">
          <i><FaArrowAltCircleLeft /></i>
          Back to Results
        </button>
        <h1>
          <a href={userUrl} rel="noreferrer" target={"_blank"} >{userName}</a>/
          <a href={html_url} rel="noreferrer" target={"_blank"}>{repoName}</a>
        </h1>
        <div className="stats">
          <span><i><FaCalendarAlt /></i>Created {createdTime}</span>
          <span><i><FaEdit /></i>Updated {updatedTime}</span>
          <span><i><FaWeightHanging /></i>Size {size}kb</span>
          {language && (<span><i><FaCode /></i>{language}</span> )}
          <span><i><FaCodeBranch /></i> Forks {forks_count}</span>
          <span><i><FaExclamationTriangle /></i>Issues {open_issues}</span>
          <span><i><FaBinoculars /></i>Watchers {watchers_count}</span>
          <span><i><FaStar /></i>{stargazers_count}</span>
        </div>
        <p>{description}</p>
        <a href={html_url} rel="noreferrer" target={"_blank"} className="pill pill-link"><i><FaLink /></i>Repository</a>
        <a href={git_url} rel="noreferrer" target={"_blank"} className="pill pill-link"><i><FaGithub /></i>Git</a>
        <a href={tags_url} rel="noreferrer" target={"_blank"} className="pill pill-link"><i><FaTags /></i>Tags</a>
      </div>
    </Container>
  )
}

export default RepositoryDetails
