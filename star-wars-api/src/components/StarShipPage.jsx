import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const StarshipPage = () => {
    let { id } = useParams()
    const location = useLocation()
    const [ship, setShip] = useState(location.state?.starship || null)

    useEffect(() => {
        if (!ship) {
            // Fetch starship by ID if not passed in state (optional improvement)
            const fetchStarship = async () => {
                const response = await axios.get(`${STARSHIP_PATH}/${id}`)
                setShip(response.data)
            }
            fetchStarship()
        }
    }, [id, ship])

    return ship ? (
        <div className="detail">
            <h1 className="detail-name">{ship.name}</h1>
            <h2>Starship Details</h2>
            <h3 className="name">Ship name: {ship.name}</h3>
            <h4>Model: {ship.model}</h4>
            <h4>Manufacturer: {ship.manufacturer}</h4>
        </div>
    ) : <h1>Loading...</h1>
}

export default StarshipPage

