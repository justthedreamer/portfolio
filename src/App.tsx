import React from 'react';
import { WelcomeSite } from './pages/welcome';
import { Home } from './pages/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <WelcomeSite/> }></Route>
        <Route path='/visite' element={ <WelcomeSite/> }></Route>
        <Route path='/home' element= { <Home/>  }></Route>
      </Routes>
    </Router>
  );
}

export default App;
