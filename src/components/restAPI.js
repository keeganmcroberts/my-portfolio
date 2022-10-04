function RestAPI({setExperienceOOP, setExperienceUX, setExperienceREST}){
    
    
    function leftArrow(){
        setExperienceREST(false)
        setExperienceOOP(true)
    }

    function rightArrow(){
        setExperienceREST(false)
        setExperienceUX(true)
    }


    return(
        <div className="card">
        <div className="experience-card">
            
            <h4>Rest</h4>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow }className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default RestAPI;