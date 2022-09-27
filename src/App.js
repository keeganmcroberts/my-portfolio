import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import uno from './project-images/giphy-um.gif'
import concerts from './project-images/new-capstone-png.png'
import gameReview from './project-images/game.png'
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
        <div className='about'>
          
          <h2 id='about'>About me</h2>
          
        </div>
        <div className="projects">
          <h2 id='projects'>Projects</h2>
          <div className="projects-showcase">
            <div className="project-card">
              <img src={concerts}></img>
              <h3>Concert Legend</h3>
              <p>A concert tracking website which allows easy access for finding upcoming shows by Date, City, Venue, or Band. 
              </p>
              <a className="reference-link"  href="https://github.com/keeganmcroberts/CapstoneProject">Code</a>
              <a className="reference-link" href="https://www.loom.com/share/961db6b743d848a7b56ca38cb68a90f6">Demo</a>
            </div>
            <div className="project-card">
              <img src={uno}></img>
              <h3>UM</h3>
              <p>A new take on everybody’s favorite family-friendly card game, Uno.</p>
              <a className="reference-link" href="https://github.com/keeganmcroberts/Rails-React-Uno">Code</a>
              <a className="reference-link" href="https://www.loom.com/share/4b7d52ff4ef54457bd38cca5b83f35fa">Demo</a>
            </div>
            <div className="project-card">
              <img src={gameReview}></img>
              <h3>Immersive Game Review</h3>
              <p>An immersive game app where users can see their favorite games, game trailers, game scores, and game reviews. </p>
              <a className="reference-link" href="https://github.com/keeganmcroberts/Immersive-Game-Review">Code</a>
              <a className="reference-link" href="https://www.loom.com/share/1a7ef50e56dc48a5bf02847f8a39920c">Demo</a>
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
