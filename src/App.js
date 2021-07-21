import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/MainPage";
import MainPageAlt from "./components/MainPageAlt";
import Login from './components/LogIn';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
    </Router>
  );
}

export default App;
