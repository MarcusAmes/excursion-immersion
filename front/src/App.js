import React, { Component } from 'react';
import TopNavContainer from './containers/TopNavContainer';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={TopNavContainer} />
        <Switch>
          <Route exact path='/' component={Splash} />
        </Switch>
      </div>
    );
  }
}

export default App;
