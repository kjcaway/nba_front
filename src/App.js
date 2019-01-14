import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom';
import Test from "./components/Test"
import Search from "./components/search/Search"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/test" component={Test}/>
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
