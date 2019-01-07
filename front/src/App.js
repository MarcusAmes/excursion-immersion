import React, { Component } from 'react';
import TopNavContainer from './containers/TopNavContainer';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={TopNavContainer} />
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/home' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
