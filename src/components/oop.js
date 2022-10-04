function Oop({setExperienceREST, setExperienceOOP}){

    
    
    function rightArrow(){
        setExperienceOOP(false)
        setExperienceREST(true)
    }



    return(
        <div className="experience-arrows">
            
        <div className="experience-card">
            
            <h4>Oop</h4>
            
        </div>
            <div className="arrows">
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Oop;