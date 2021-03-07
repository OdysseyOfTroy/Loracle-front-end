import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import MainPageAlt from "./components/MainPageAlt"
import ContainersList from './components/ContainerList'
import CategoryList from './components/CategoryList'
import IdentifierList from './components/IdentifierList'

function App() {
  return (
    <Router>
      <Route path="/" exact component={IdentifierList}/>
    </Router>
  );
}

export default App;
