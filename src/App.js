import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import uno from './project-images/uno.gif'
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
            <a className='list-link' href='#projects'>Projects</a>
          </ul>
          <ul>
            <a className='list-link' href='#about'>About</a>
          </ul>
          <ul>
            <a className='list-link'  href='#contact'>Contact</a>
          </ul>
          </div>
        <div className="header-icons">
          <ul className="header-icons">
            <SocialIcon url="https://www.linkedin.com/in/keegan-mcroberts/"/>
            <SocialIcon url="https://github.com/keeganmcroberts"/>
            <SocialIcon url="https://dev.to/keeganmcroberts"/>
          </ul>
        </div>
      </header>
      <body className="app-body">
        <div className="projects">
          <h2 id='projects'>Projects</h2>
        </div>
        <div className='about'>
          <h2 id='about'>About me</h2>
        </div>
        <div className="contact">
          <h2 id='contact'>Contact</h2>
        </div>
        
      </body>
    </div>
  );
}

export default App;
