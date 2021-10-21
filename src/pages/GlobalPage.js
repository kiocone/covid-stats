import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import GlobalChars from "./GlobalChars";
import Globalstats from "./Globalstats";
import CountryList from "./CountryList";

function GlobalPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Global Statistics</h3>
                            <Router>
                                <div className="card-group">
                                    <GlobalChars />
                                </div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/countryList">
                                            <Link to='/countryList' className="btn btn-primary btn-sm">
                                                Country List
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/globalStats">
                                            <Link to='/globalStats' className="btn btn-primary btn-sm">
                                                Global Data
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                                <Switch>
                                    <Route exact path="/" component={Globalstats} />
                                    <Route path="/globalStats" component={Globalstats} />
                                    <Route path="/countryList" component={CountryList} />
                                </Switch>
                                <Link to='/' className="btn btn-primary btn-sm">Home</Link>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalPage;
