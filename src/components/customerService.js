function CustomerService({setExperienceService, setExperienceUX}){
   

    function leftArrow(){
        setExperienceService(false)
        setExperienceUX(true)
    }

    return(
        <div className="experience-arrows">
        <div className="experience-card">
            
            <h4>Customer Service</h4>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
               
            </div>
        </div>
    )
}

export default CustomerService;