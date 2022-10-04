function Oop({setExperienceREST, setExperienceOOP}){

    
    
    function rightArrow(){
        setExperienceOOP(false)
        setExperienceREST(true)
    }



    return(
        <div className="experience-arrows">
            
        <div className="experience-card">
            
            <img className="oop-image" src="https://static.javatpoint.com/core/images/what-is-object-oriented-programming7.png"></img>
            <h5 className="experience-header">Object Oriented Programming</h5>
            <h6 className="experience-text">Primary method for working with relational databases when building full stack applications.</h6>
        </div>
            <div className="arrows">
                <div onClick={rightArrow} className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default Oop;