import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
// ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-name">
        <a>Keegan McRoberts</a>
        </div>
        <div className="header-list">
          <ul>
            <a>Projects</a>
          </ul>
          <ul>
            <a>About</a>
          </ul>
          <ul>
            <a>Contact</a>
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
      <br></br>
      <body className="app-body">
        <h2>Contents</h2>
      </body>
    </div>
  );
}

export default App;
