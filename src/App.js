import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import CountryPage from "./pages/CountryPage"
import GlobalPage from "./pages/GlobalPage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Covid-19 Statistics</h3>
              <Router>
                <Switch>
                  <Route exact path="/" component={GlobalPage} />
                  <Route path="/globalPage" component={GlobalPage} />
                  <Route path="/countryPage" component={CountryPage} />
                </Switch>
              </Router>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
