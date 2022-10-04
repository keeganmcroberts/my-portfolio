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
            <h5 className="experience-header">UX/UI Design</h5>
            <h6 className="experience-text">Intuitive solutions, elegant designs, and seemless user interfaces.</h6>
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Ux;