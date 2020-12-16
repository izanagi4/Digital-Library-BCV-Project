import React from "react";
import StartPage from "./StartPage";
import Home from "./Home";
import Catalogue from "./Catalogue";
import About from "./About";
import Riset from "./Riset";
import Faq from "./Faq";
import Login from "./Login.js";
import Test from "./Test";
import UploadRiset from "./UploadRiset";
import UploadFile from "./uploadfile";
import RepositoryRiset from "./RepositoryRiset";
import DatabaseRiset from "./DatabaseRiset";
import KategoriBuku from "./KategoriBuku";
import "./App.css";
import "./App.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exacth path="/kategoribuku" component={KategoriBuku} />
        <Route exacth path="/databaseriset" component={DatabaseRiset} />
        <Route exacth path="/repositoryriset" component={RepositoryRiset} />
        <Route exacth path="/uploadfile" component={UploadFile} />
        <Route exacth path="/uploadriset" component={UploadRiset} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/" component={StartPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/about" component={About} />
        <Route exact path="/riset" component={Riset} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
