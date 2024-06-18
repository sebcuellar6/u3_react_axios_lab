
import { Link } from 'react-router-dom'
import StarshipList from './StarshipList'

export default function Nav () {
return (
    <div className="nav-links">
       <Link to="/"> Home </Link>
       <Link to="/starships">Starship List</Link>
       <Link to="/people">People List</Link> 
       <Link to="/planet">Planet List</Link>    
       <Link to="/film">Film List</Link> 
       <Link to="/species">Species List</Link>
       <Link to="/vehicles">Vehicle List</Link> 
    </div>
 )
}