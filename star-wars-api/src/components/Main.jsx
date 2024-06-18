import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import People from './People';
import Planet from './Planets';
import Film from './Films';
import Species from './Species';
import Vehicle from './Vehicles';
import StarshipPage from './StarShipPage';
import StarshipsList from './StarshipList';

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipsList />} />
                <Route path="/people" element={<People />} />
                <Route path="/planet" element={<Planet />} />
                <Route path="/film" element={<Film />} />
                <Route path="/species" element={<Species />} />
                <Route path="/vehicles" element={<Vehicle />} />
                <Route path="/starships/:id" element={<StarshipPage />} />
            </Routes>
        </div>
    );
};

export default Main;


