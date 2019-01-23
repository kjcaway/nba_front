import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Test from "./components/Test"
import SearchTemplate from "./components/SearchTemplate"

import { Provider } from 'react-redux';
import configureStore from './store'
import reducers from './reducers'

const store = configureStore(reducers)


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={SearchTemplate}/>
              <Route path="/test" component={Test}/>
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
