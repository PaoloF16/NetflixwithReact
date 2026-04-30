import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar, Hero } from "./Components";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero></Hero>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
