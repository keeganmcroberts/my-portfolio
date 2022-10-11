
import Bio from "./bio";

function About(){
    return (
        <div className='about'>
            <Bio/>
            <div className="about-div">
                <h2 id='about'> About Me</h2>
                <h3 className="about-me-bio">Welcome to my portfolio! My name is Keegan and I'm a Full Stack Software Engineer who recently graduated coding bootcamp with extensive training in JavaScript, ReactJS, and Ruby on Rails. After having completed my undergraduate studies at Colorado State University with a BS in Public Health and Exercise science, I worked shortly in the healthcare field as a Registered Behavior Technician. With a recent career transition, I decided to take my creative outlook, collaboration skills, and adaptable mindset into the tech field. </h3>
            </div>
      </div>
    )
}

export default About;