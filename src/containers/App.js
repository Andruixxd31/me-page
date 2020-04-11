import React, { Component } from 'react';
import Menu from '../components/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components from the Sections folder
import Me from '../Sections/Me';
import Ambitions from '../Sections/Ambitions';
import Moments from '../Sections/Moments';
import Trivia from '../Sections/Trivia';
import FanClub from '../Sections/FanClub';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="bg-washe">
        {/*React Router renders different components */}
        <Router>
          <Menu/>
          <Switch>
            {/* Switch will render only one route */}
            {/* exact will only render its component if the path is exactly the same es the provided */}
            <Route path='/Sections/Me' exact component={Me}/>
            <Route path='/Sections/Ambitions' exact component={Ambitions}/>
            <Route path='/Sections/Moments' exact component={Moments}/>
            <Route path='/Sections/Trivia' exact component={Trivia}/>
            <Route path='/Sections/FanClub' exact component={FanClub}/>
            {/* Will render at the start of the app, once a path is selected it will not be rendered anymore */}
            <Route path='/' exact render={() => (  
              <div>
                <div className="App-header">
                  <h1>Hello</h1>
                  <h1>Welcome to <text className="tc2">mePage</text></h1>
                </div>
                <h3>You are awesome if you read this</h3>
              </div>
            )}/>
            {/*Shows when the path does not point to any component of the app*/}
            <Route path='/' render={() => (
              <div>
                <div className="App-header">
                  <h1>Link not <text className="tc2">available</text></h1>
                </div>
              </div>
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
