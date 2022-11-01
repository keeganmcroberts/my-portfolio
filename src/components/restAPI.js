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
            
            <img className="rest-image" src="https://nordicapis.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work.png"></img>
            <h5 className="experience-header">REST APIs</h5>
            <h6 className="experience-text">Experience in representational state transfer and information exchange with HTTP functionality.</h6>
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
                <div onClick={rightArrow }className="right-arrow">⇨</div>
            </div>
        </div>
    )
}

export default RestAPI;