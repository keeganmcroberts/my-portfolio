import './App.css';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import StarStyling from './components/starStyling';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';

// ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />);

function App() {

  return (
    <div className="App">
      <StarStyling/>
      <Header/>
      <body className="app-body">
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </body>
    </div>  
  )
}

export default App;
