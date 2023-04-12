import './App.css';
import {Home, Landing, Detail, Form} from "./Views/index"
import NavBar from "./Components/NavBar/NavBar"
import {Route, useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Create">
        <Form />
      </Route>

      <Route path="/Detail">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
