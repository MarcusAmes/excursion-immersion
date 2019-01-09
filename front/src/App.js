import React, { Component } from 'react';
import TopNavContainer from './containers/TopNavContainer';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import HomeContainer from './containers/HomeContainer';
import ViewTripContainer from './containers/ViewTripContainer';
import RegisterContainer from './containers/RegisterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={TopNavContainer} />
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route path='/register' component={RegisterContainer} />
          <Route exact path='/home' component={HomeContainer} />
          <Route path='/trip/:id' component={ViewTripContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
