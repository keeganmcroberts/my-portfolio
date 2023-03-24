import { SocialIcon } from 'react-social-icons';
import resume from '../project-images/updated_resume.pdf'

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
                    <a className='list-link'  href='#contact' >Contact</a>
                </ul>
                <ul>
                    <a className='list-link'  href={resume} target="_blank">Resume</a>
                </ul>
                </div>
                <div className="header-icons">
                <ul className="header-icons">
                    <SocialIcon className='icon' url="https://www.linkedin.com/in/keegan-mcroberts/" target="_blank"/>
                    <SocialIcon className='icon' url="https://github.com/keeganmcroberts" target="_blank"/>
                    <SocialIcon className='icon' url="https://dev.to/keeganmcroberts" target="_blank"/>
                </ul>
                </div>
            </header>
      </div>

    )

}

export default Header;