import Header from "./components/header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </>
  );
};

export default App;
