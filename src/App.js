import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavHome from './components/NavHome';
import Login from './components/Login';
import Signup from './components/Signup';

import UserHome from './components/UserContainer/UserHome';
import UserStats from './components/UserContainer/UserStats';


function App() {
  return (
      <div>
      <Router>
          
          <div className="Paths">
          
          <Switch>
          <Route path="/" exact component={ NavHome } />          
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
          <Route path="/user" component={ UserHome } />
          <Route path="/user-stats" component={ UserStats } />
          </Switch>          
          </div>

      </Router> 
      </div>  
  );
}

export default App;
