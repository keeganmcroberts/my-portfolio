import teton from '../project-images/teton.png'
import juno from '../project-images/juno.jpeg'


function Bio(){
    return(
        <div className="bio">
        <div class="bio-images">
            <div class="mainImage">
                 <img src={teton} alt="Default Image"></img>
            </div>
            <div class="hoverImage">
                <img src={juno} alt="Profile Image"></img>
            </div>
        </div>
        <div className="interests">
            <h4 className="passion-header">My Interests:</h4>
            <div className="passions">
            <p>Hiking</p>
            <p>Traveling</p>
            <p>Camping</p>
            <p>Music</p>
            <p>Video Games</p>
            <p>Sports</p>
            <p>My Dog</p>
            <p>Photography</p>
            <p>Coding</p>
            </div>
        </div>
        </div>
    )
}

export default Bio;