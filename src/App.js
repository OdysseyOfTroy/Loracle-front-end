import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import MainPageAlt from "./components/MainPageAlt"
import ContainersList from './components/ContainerList'
import CategoryList from './components/CategoryList'
import IdentifierList from './components/IdentifierList'
import InformationList from './components/InformationList'
import UserForm from './components/UserForm'

function App() {
  return (
    <Router>
      <Route path="/"  component={UserForm}/>
    </Router>
  );
}

export default App;
