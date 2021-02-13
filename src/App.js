import Layout from "./layouts";
import styled from "styled-components";

export const Div =  styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Div className="App">
      <Layout>
        <h1>React App</h1>
      </Layout>
    </Div>
  );
}

export default App;
