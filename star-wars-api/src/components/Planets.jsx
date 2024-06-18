import { PLANET_PATH } from "../../globals"
import axios from "axios"

import { useEffect, useState } from "react"

export default function Planet () {

    const [planet, setPlanet] = useState([])

    useEffect(() => {
        const getPlanet=async () => {
            const response = await axios.get(`${PLANET_PATH}`)
            //console.log(response)
            setPlanet(response.data.results)

        }
        getPlanet()
    }, [])
    //console.log(starplanet, starplanet)
   console.log(planet)
    if (planet.length === 0) {
        return <h1>planet taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    planet.map((planet) => (
                        <div key = {planet.name} className="pathDesc">
                            <h2>{planet.name}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}