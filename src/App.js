import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import ContainerList from './components/getLists/ContainerList'
import CategoryList from './components/getLists/CategoryList'
import IdentifierList from './components/getLists/IdentifierList'
import InformationList from './components/getLists/InformationList'
import UserForm from './components/UserForm'
import Login from './components/LogIn';
import SignUp from './components/Signup';
import Sidebar from './components/sidebar/Sidebar-component';

function App() {
  return (
    <Router>
      <Route exact path="/"><Login /></Route> 
      <Route exact path="/Signup"><SignUp /></Route>
      <Route exact path="/Home" ><MainPage /></Route>
      <Route exact path="/Category"><CategoryList /></Route>
      <Route exact path="/Container"><ContainerList /></Route>
      <Route exact path="/Sidebar"><Sidebar /></Route>
    </Router>
  );
}

export default App;
