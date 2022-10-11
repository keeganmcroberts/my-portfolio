import gameReview from '../project-images/game.png'

function GameReview(){
    return(
        <div className="project-card">
              <img src={gameReview}></img>
              <h2 className="projectName">Immersive Game Review</h2>
              <h4 className="project-description">An immersive game app where users can see their favorite games, game trailers, game scores, and game reviews. </h4>
              <h5 className="software">Stack:</h5>
              <h5 className="softwares">Javascript  React REST CRUD JSON</h5>
              <div className="buttons">
                <a className="reference-link1" href="https://github.com/keeganmcroberts/Immersive-Game-Review">Code</a>
                <a className="reference-link2" href="https://www.loom.com/share/1a7ef50e56dc48a5bf02847f8a39920c">Demo</a>
              </div>
        </div>
    )
}

export default GameReview;