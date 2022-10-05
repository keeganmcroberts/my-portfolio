import { SocialIcon } from 'react-social-icons';

function Contact(){
    return(
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
    )
}

export default Contact;