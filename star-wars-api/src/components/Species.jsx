import { SPECIES_PATH } from "../../globals"
import axios from "axios"

import { useEffect, useState } from "react"

export default function Species () {

    const [species, setSpecies] = useState([])

    useEffect(() => {
        const getSpecies=async () => {
            const response = await axios.get(`${SPECIES_PATH}`)
            //console.log(response)
            setSpecies(response.data.results)

        }
        getSpecies()
    }, [])
    
   console.log(species)
    if (species.length === 0) {
        return <h1>species taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    species.map((species) => (
                        <div key = {species.name} className="pathDesc">
                            <h2>{species.name}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}