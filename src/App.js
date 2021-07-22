import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import ContainersList from './components/ContainerList'
import CategoryList from './components/CategoryList'
import IdentifierList from './components/IdentifierList'
import InformationList from './components/InformationList'
import UserForm from './components/UserForm'
import Login from './components/LogIn';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route exact path="/Signup"><SignUp /></Route>
      <Route exact path="/Home" ><MainPage /></Route>
    </Router>
  );
}

export default App;
