import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "https://deploy-production-ce0d.up.railway.app/";
// Que haga las peticiones a este backend

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/home" && <NavBar />}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
