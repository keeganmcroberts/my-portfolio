import { SocialIcon } from 'react-social-icons';

function Header(){
    return(
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
                    <a className='list-link' href='#experience'>Experience</a>
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
      </div>

    )

}

export default Header;