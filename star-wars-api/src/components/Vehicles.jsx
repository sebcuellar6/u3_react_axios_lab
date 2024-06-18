import { VEHICLE_PATH } from "../../globals"
import axios from "axios"

import { useEffect, useState } from "react"

export default function Vehicle () {

    const [vehicle, setVehicle] = useState([])

    useEffect(() => {
        const getVehicle=async () => {
            const response = await axios.get(`${VEHICLE_PATH}`)
            //console.log(response)
            setVehicle(response.data.results)

        }
        getVehicle()
    }, [])
    
   console.log(vehicle)
    if (vehicle.length === 0) {
        return <h1>vehicle taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    vehicle.map((vehicle) => (
                        <div key = {vehicle.name} className="pathDesc">
                            <h2>{vehicle.name}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}