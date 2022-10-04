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
            
            <h4>UX</h4>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Ux;