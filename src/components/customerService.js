function CustomerService({setExperienceService, setExperienceUX}){
   

    function leftArrow(){
        setExperienceService(false)
        setExperienceUX(true)
    }

    return(
        <div className="experience-arrows">
        <div className="experience-card">
            
            
            <img className="customer-service-image" src="https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/customer-service-examples-feature-image2.png"></img>
            
        </div>
            <div className="arrows">
                <div onClick={leftArrow} className="left-arrow">⇦</div>
               
            </div>
        </div>
    )
}

export default CustomerService;