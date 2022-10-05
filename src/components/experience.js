import { useState } from "react"
import Oop from "./oop"
import RestAPI from "./restAPI"
import Ux from "./ux"
import CustomerService from "./customerService"


function Experience(){

    const [experienceOOP, setExperienceOOP] = useState(true)
    const [experienceREST, setExperienceREST] = useState(false)
    const [experienceUX, setExperienceUX] = useState(false)
    const [experienceService, setExperienceService] = useState(false)

    return(
        <div className="experience">
            <h2 id='experience' className="skills-h3">Experience</h2>
            <div className="experience-div">
                { experienceOOP ? <Oop setExperienceREST={setExperienceREST} setExperienceOOP={setExperienceOOP}/> : null}
                { experienceREST ? <RestAPI setExperienceREST={setExperienceREST} setExperienceOOP={setExperienceOOP} setExperienceUX={setExperienceUX}/> : null}
                {  experienceUX ? <Ux setExperienceUX={setExperienceUX} setExperienceREST={setExperienceREST} setExperienceService={setExperienceService}/> : null}
                { experienceService ? <CustomerService setExperienceService={setExperienceService} setExperienceUX={setExperienceUX}/> : null}
            </div>
        </div>
    )
}

export default Experience;