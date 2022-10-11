
import Um from './um';
import ProjectLegend from './projectLegend'
import GameReview from './gameReview';


function Projects(){
    return(
        <div className="projects">
          <h2 id='projects' className="skills-h3">Projects</h2>
          <div className="projects-showcase">
            <ProjectLegend/>
            <Um/>
            <GameReview/> 
          </div>
        </div>
    )
}

export default Projects;