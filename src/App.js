import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Test from "./components/Test"
import SearchTemplate from "./components/SearchTemplate"


class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={SearchTemplate}/>
            <Route path="/test" component={Test}/>
            <Route />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
