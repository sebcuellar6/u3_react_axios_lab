import { STARSHIP_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import StarshipPage from "./StarShipPage"

function StarshipsList() {
    let navigate = useNavigate()
    const [starships, setStarships] = useState([])

    const showShip = (starship) => {
        navigate(`/starships/${starship.id}`, { state: { starship } })
    }

    useEffect(() => {
        const getStarships = async () => {
            const response = await axios.get(STARSHIP_PATH)
            setStarships(response.data.results)
        }
        getStarships()
    }, [])

    if (starships.length === 0) {
        return <h1>Starships taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {starships.map((starship) => (
                    <div key={starship.name} className="pathDesc" onClick={() => showShip(starship)}>
                        <h2>Ship Name: {starship.name}</h2>
                        <h2>Model: {starship.model}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default StarshipsList


