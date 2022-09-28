import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import uno from './project-images/giphy-um.gif'
import concerts from './project-images/new-capstone-png.png'
import gameReview from './project-images/game.png'
import html from './technology-images/1200px-HTML5_logo_and_wordmark.svg.png'
import css from './technology-images/CSS3_logo_and_wordmark.svg.png'
import github from './technology-images/GitHub-logo.png'
import heroku from './technology-images/heroku-logo-B774A78667-seeklogo.com.png'
import javascript from './technology-images/javascript_logo.png'
import postgres from './technology-images/postgresql.webp'
import react from './technology-images/react-logo.png'
import ruby from './technology-images/Ruby_on_Rails-logo.png'
import rails from './technology-images/338194cb78bf1635e0776b20ef846038.png'
// ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-name">
        <a className='list-link' href="/">Keegan McRoberts</a>
        </div>
        <div className="header-list">
          <ul>
            <a className='list-link' href='#about'>About</a>
          </ul>
          <ul>
            <a className='list-link' href='#projects'>Projects</a>
          </ul>
          <ul>
            <a className='list-link'  href='#contact'>Contact</a>
          </ul>
          </div>
        <div className="header-icons">
          <ul className="header-icons">
            <SocialIcon className='icon' url="https://www.linkedin.com/in/keegan-mcroberts/"/>
            <SocialIcon className='icon' url="https://github.com/keeganmcroberts"/>
            <SocialIcon className='icon' url="https://dev.to/keeganmcroberts"/>
          </ul>
        </div>
      </header>
      <body className="app-body">
      <h2 id='about'>About me</h2>
        <div className='about'>
          <div className="about-div">
            About me
          </div>
          <div className="technologies-div">
          
            
          <img src={html}></img>
          <img src={css}></img>
          <img src={github}></img>
          <img src={heroku}></img>
          <img src={javascript}></img>
          <img src={postgres}></img>
          <img src={react}></img>
          <img src={ruby}></img>
          <img src={rails}></img>
          </div>
          
        </div>
        <div className="projects">
          <h2 id='projects'>Projects</h2>
          <div className="projects-showcase">
            <div className="project-card">
              <img src={concerts}></img>
              <h2>Concert Legend</h2>
              <h4>A concert tracking website which allows easy access for finding upcoming shows by Date, City, Venue, or Band. 
              </h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React  Rails  BCrpypt </h5>
              <a className="reference-link1"  href="https://github.com/keeganmcroberts/CapstoneProject">Code</a>
              <a className="reference-link2" href="https://www.loom.com/share/961db6b743d848a7b56ca38cb68a90f6">Demo</a>
            </div>
            <div className="project-card">
              <img src={uno}></img>
              <h2>UM</h2>
              <h4>A new take on everybody’s favorite family-friendly card game, Uno.</h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React  Rails REST </h5>
              <br></br>
              <a className="reference-link1" href="https://github.com/keeganmcroberts/Rails-React-Uno">Code</a>
              <a className="reference-link2" href="https://www.loom.com/share/4b7d52ff4ef54457bd38cca5b83f35fa">Demo</a>
            </div>
            <div className="project-card">
              <img src={gameReview}></img>
              <h2>Immersive Game Review</h2>
              <h4>An immersive game app where users can see their favorite games, game trailers, game scores, and game reviews. </h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React REST CRUD JSON</h5>
              <a className="reference-link1" href="https://github.com/keeganmcroberts/Immersive-Game-Review">Code</a>
              <a className="reference-link2" href="https://www.loom.com/share/1a7ef50e56dc48a5bf02847f8a39920c">Demo</a>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2 id='contact'>Contact</h2>
        </div>
        
      </body>
    </div>
  );
}

export default App;
