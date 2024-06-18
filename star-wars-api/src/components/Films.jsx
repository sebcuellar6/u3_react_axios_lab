import { FILM_PATH } from "../../globals"
import axios from "axios"

import { useEffect, useState } from "react"

export default function Film () {

    const [film, setFilm] = useState([])

    useEffect(() => {
        const getFilm=async () => {
            const response = await axios.get(`${FILM_PATH}`)
            //console.log(response)
            setFilm(response.data.results)

        }
        getFilm()
    }, [])
    
   console.log(film)
    if (film.length === 0) {
        return <h1>film taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    film.map((film) => (
                        <div key = {film.title} className="pathDesc">
                            <h2>{film.title}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}