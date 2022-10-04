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
            
            <img className="rest-image" src="https://www.mindinventory.com/blog/wp-content/uploads/2021/09/rest-api-model-1.png"></img>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow }className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default RestAPI;