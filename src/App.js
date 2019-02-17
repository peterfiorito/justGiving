import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AllCharities from './AllCharities'
import CharityInfo from './CharityInfo'

import './styles/app.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <div>
            <Route exact={true} path="/" component={AllCharities} />
            <Route path="/charity/:id" component={CharityInfo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
