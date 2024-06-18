import { PEOPLE_PATH } from "../../globals"
import axios from "axios"

import { useEffect, useState } from "react"

export default function People () {

    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeople=async () => {
            const response = await axios.get(`${PEOPLE_PATH}`)
            //console.log(response)
            setPeople(response.data.results)

        }
        getPeople()
    }, [])
    //console.log(starpeople, starpeople)
   console.log(people)
    if (people.length === 0) {
        return <h1>people taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    people.map((people) => (
                        <div key = {people.name} className="pathDesc">
                            <h2>{people.name}</h2>
                            
                            </div>
                    ))
                }
            </div>
        )
    }

}
