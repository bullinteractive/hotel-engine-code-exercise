import styled from "styled-components";

import Home from "./pages/Home";

export const Div =  styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Div className="App">
      <Home />
    </Div>
  );
}

export default App;
