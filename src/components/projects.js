import uno from '../project-images/giphy-um.gif'
import concerts from '../project-images/new-capstone-png.png'
import gameReview from '../project-images/game.png'


function Projects(){
    return(
        <div className="projects">
          <h2 id='projects' className="skills-h3">Projects</h2>
          <div className="projects-showcase">
            <div className="project-card">
              <img src={concerts}></img>
              <h2>Concert Legend</h2>
              <h4 className="project-description">A concert tracking website which allows easy access for finding upcoming shows by Date, City, Venue, or Band. 
              </h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React  Rails  BCrpypt </h5>
              <div className="buttons">
                <a className="reference-link1"  href="https://github.com/keeganmcroberts/CapstoneProject">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/961db6b743d848a7b56ca38cb68a90f6">Demo</a>
              </div>
            </div>
            <div className="project-card">
              <img src={uno}></img>
              <h2>UM</h2>
              <h4 className="project-description">A new take on everybody’s favorite family-friendly card game, Uno.</h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React  Rails REST </h5>
              <br></br>
              <div className="buttons">
                <a className="reference-link1" href="https://github.com/keeganmcroberts/Rails-React-Uno">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/4b7d52ff4ef54457bd38cca5b83f35fa">Demo</a>
              </div>
            </div>
            <div className="project-card">
              <img src={gameReview}></img>
              <h2>Immersive Game Review</h2>
              <h4 className="project-description">An immersive game app where users can see their favorite games, game trailers, game scores, and game reviews. </h4>
              <h5 className="software">Stack</h5>
              <h5 className="softwares">Javascript  React REST CRUD JSON</h5>
              <div className="buttons">
                <a className="reference-link1" href="https://github.com/keeganmcroberts/Immersive-Game-Review">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/1a7ef50e56dc48a5bf02847f8a39920c">Demo</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Projects;