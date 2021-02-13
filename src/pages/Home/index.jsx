import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Layout from "../../layouts"

const Home = () => {
  return (
    <Layout>
      <SearchForm />
      <SearchResults />
    </Layout>
  );
}

export default Home;