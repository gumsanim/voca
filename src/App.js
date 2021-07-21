import Title from "./components/Title";
import Days from "./components/Days";
import WordsList from "./components/WordsList";
import AddDay from "./components/AddDay";
import AddWord from "./components/AddWord";
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// npx json-server ./src/db/data.json --watch --port 3001

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title/>
        <Switch>
          <Route exact path="/">
            <Days/>
          </Route>
          <Route path="/day/:day">
            <WordsList/>
          </Route>
          <Route path="/addday">
            <AddDay/>
          </Route>
          <Route path="/addword">
            <AddWord/>
          </Route>
          <Route>
            <ErrorPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
