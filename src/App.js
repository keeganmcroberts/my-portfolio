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
      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
      </div>
      <div className="fixedHeader">
      <header className="App-header">
        <div className="header-name">
        <a className='header-link' href="/">Keegan McRoberts</a>
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
          <ul>
            <a className='list-link'  href='file:///Users/keegan/Downloads/Keegan_McRoberts_Resume%20(1).pdf'>Resume</a>
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
      </div>
      <body className="app-body">
      
        <div className='about'>
          <div className="about-div">
            <h2 id='about'> About Me</h2>
            <h3 className="about-me-portfolio">Welcome to my portfolio! My name's Keegan and i'm a full stack software engineer who recently graduated coding bootcamp with extensive training in Javascript, ReactJS, and Ruby on Rails. After having completed my undergraduate studies at Colorado State University with a BS in Public Health and Exercise science, I worked shortly in the healthcare field as a Registered Behavior Technician. With a recent career transition, I decided to take my creative outlook, collaboration skills, and adaptable mindset into the tech field. </h3>
          </div>
          <div className="skills-div">
            <h3 className="skills-h3">Skills</h3>
            <div className="technologies-div">
            
            
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
          </div>
          
        </div>
        <div className="projects">
          <h2 id='projects' className="skills-h3">Projects</h2>
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
        <div className="experience">
        <h2 id='experience' className="skills-h3">Experience</h2>
        <div className="experience-div"></div>
        </div>
        <div className="contact">
          <h2 id='contact' className="skills-h3">Contact</h2>
            <div className="contact-info">
              <h4>EMAIL</h4>
              <h3>keegan.mcroberts@gmail.com</h3>
              <div className="header-icons">
                <ul className="header-icons">
                  <SocialIcon className='icon' url="https://www.linkedin.com/in/keegan-mcroberts/"/>
                  <SocialIcon className='icon' url="https://github.com/keeganmcroberts"/>
                  <SocialIcon className='icon' url="https://dev.to/keeganmcroberts"/>
                </ul>
              </div>
            </div>
        </div>
        
      </body>
    </div>
    
  );
}

export default App;
