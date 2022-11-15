import React from 'react'
import './App.css';
import HomePage from './components/HomePage.js'
import News from './components/NewsPage/NewsPage.js'
import Navbar from './components/Navbar/navbar.js'
import Contact from './components/Contact.js'
import AboutPage from './components/AboutPage/AboutPage.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router basename="/static">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 