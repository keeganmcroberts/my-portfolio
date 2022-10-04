function Oop({setExperienceREST, setExperienceOOP}){

    
    
    function rightArrow(){
        setExperienceOOP(false)
        setExperienceREST(true)
    }



    return(
        <div className="experience-arrows">
            
        <div className="experience-card">
            
            <img className="oop-image" src="https://miro.medium.com/max/600/0*7zMicw-FfThCbN35.png"></img>
            
        </div>
            <div className="arrows">
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Oop;