import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/LogIn';
import SignUp from './components/Signup';
import Sidebar from './components/Sidebar/Sidebar.Component';
import Navbar from './components/Sidebar/Sidebar.Component';
import Dashboard from './components/Dashboard/Dashboard.Component';

function App() {
  return (
    <Router>
      <Route exact path="/"><Login /></Route> 
      <Route exact path="/Signup"><SignUp /></Route>
      <Route exact path="/Home" ><Dashboard /></Route>
      <Route exact path="/Sidebar"><Sidebar /></Route>
      <Route exact path="/SidebarItem"><Navbar /></Route>
    </Router>
  );
}

export default App;
