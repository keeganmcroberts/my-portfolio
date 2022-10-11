import uno from '../project-images/giphy-um.gif'

function Um(){
    return(
        <div className="project-card">
              <img src={uno}></img>
              <h2 className="projectName">Um</h2>
              <h4 className="project-description">A new take on everybody’s favorite family-friendly card game, Uno. Um is a mock demonstration of the logic necessary for the card game.</h4>
              <h5 className="software">Stack:</h5>
              <h5 className="softwares">Javascript  React  Rails REST </h5>
              <br></br>
              <div className="buttons">
                <a className="reference-link1" href="https://github.com/keeganmcroberts/Rails-React-Uno" target="_blank">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/4b7d52ff4ef54457bd38cca5b83f35fa" target="_blank">Demo</a>
              </div>
        </div>
    )
}

export default Um;