import park from '../project-images/nationalPark.png'

function Park(){
    return(
        <div className="project-card">
              <img src={park}></img>
              <h2 className="projectName">National Park Locator</h2>
              <h4 className="project-description">A user-personalized and interactive National Park website intended for user research, cataloguing experiences, and reviewing different National Parks. (Demo coming soon!)  </h4>
              <h5 className="software">Stack:</h5>
              <h5 className="softwares">MapBoxGL React Rails API</h5>
              <br></br>
              <div className="buttons">
                <a className="reference-link1" href="https://github.com/keeganmcroberts/Natioanl-Park-Locator" target="_blank">Code</a>
                <a className="reference-link2" target="_blank">Demo</a>
              </div>
        </div>
    )
}

export default Park;