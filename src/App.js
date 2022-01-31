import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(){
  
   const apikey=process.env.REACT_APP_API_KEY;

    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={10}
                country="in"
                category="general"
                apiKey={apikey}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="general"
                pageSize={10}
                country="in"
                category="business"
                apiKey={apikey}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="business"
                pageSize={10}
                country="in"
                category="entertainment"
                apiKey={apikey}
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={10}
                country="in"
                category="general"
                apiKey={apikey}
              />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={10}
                country="in"
                category="science"
                apiKey={apikey}
              />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={10}
                country="in"
                category="technology"
                apiKey={apikey}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
