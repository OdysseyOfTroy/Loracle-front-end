import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/LogIn';
import SignUp from './components/Signup';
import Sidebar from './components/MainPage/Sidebar/Sidebar.Component'
import Dashboard from './components/Dashboard/Dashboard.Component';

function App() {
  return (
    <Router>
      <Route exact path="/"><Login /></Route> 
      <Route exact path="/signup"><SignUp /></Route>
      <Route exact path="/home" ><Dashboard /></Route>
      <Route exact path="/sidebar"><Sidebar /></Route>
    </Router>
  );
}

export default App;
