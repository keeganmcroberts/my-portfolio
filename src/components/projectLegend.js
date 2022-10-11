import concerts from '../project-images/new-capstone-png.png'

function ProjectLegend(){
    return(
        <div className="project-card">
              <img src={concerts}></img>
              <h2 className="projectName">Concert Legend</h2>
              <h4 className="project-description">A concert tracking website which allows easy access for finding upcoming shows by Date, City, Venue, or Band. 
              </h4>
              <h5 className="software">Stack:</h5>
              <h5 className="softwares">JavaScript  React  Rails  BCrpypt </h5>
              <div className="buttons">
                <a className="reference-link1"  href="https://github.com/keeganmcroberts/CapstoneProject">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/961db6b743d848a7b56ca38cb68a90f6">Demo</a>
              </div>
        </div>
    )
}

export default ProjectLegend;