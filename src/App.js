import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import MainPageAlt from "./components/MainPageAlt"
import ContainersList from './components/ContainerList'

function App() {
  return (
    <Router>
      <Route path="/" exact component={ContainersList}/>
    </Router>
  );
}

export default App;
