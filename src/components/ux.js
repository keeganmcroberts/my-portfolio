function Ux({setExperienceUX, setExperienceREST, setExperienceService}){

    function rightArrow(){
        setExperienceUX(false)
        setExperienceService(true)
    }

    function leftArrow(){
        setExperienceUX(false)
        setExperienceREST(true)
    }

    return(
        <div className="experience-arrows">
        <div className="experience-card">
            
            <img className="ux-image" src='https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2019/07/23135307/Banner-Image.jpg'></img>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Ux;