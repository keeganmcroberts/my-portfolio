
import Um from './um';
import ProjectLegend from './projectLegend'
import GameReview from './gameReview';
import Park from './nationalPark';


function Projects(){
    return(
        <div className="projects">
          <h2 id='projects' className="skills-h3">Projects</h2>
          <div className="projects-showcase">
            <Park/>
            <ProjectLegend/>
            <Um/>
            <GameReview/> 
          </div>
        </div>
    )
}

export default Projects;