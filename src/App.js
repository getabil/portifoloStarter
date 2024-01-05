// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/experience" component={Experience} />
      <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
