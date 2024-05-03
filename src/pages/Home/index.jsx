import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import './index.styles.scss';

const Home = () => {
	return (
		<div className="main-container">
			<div className="form-container">
				<SearchForm />
			</div>
			<div className="results-container">
				<SearchResults />
			</div>
		</div>
	);
};

export default Home;
