import Header from "./components/header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import CV from './components/pages/cv/CV';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Switch>
            <Route path="/cv" component={CV} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
