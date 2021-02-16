import { Route, Switch } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import RepositoryDetails from "./pages/RepositoryDetails";

export const Div =  styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Div className="App">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/repository"><RepositoryDetails /></Route>
      </Switch>
    </Div>
  );
}

export default App;
