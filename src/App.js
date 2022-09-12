import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import AsteroidsAndComets from './Pages/Asteroids&Comets/AsteroidsAndComets';
import Home from './Pages/Home/Home';
import Moons from './Pages/Moons/Moons';
import Planets from './Pages/Planets/Planets';
import SolarSystem from './Pages/Solar System/SolarSystem';


function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/solarsystem' element={<SolarSystem/>}/>
  <Route path='/moons' element={<Moons/>}/>
  <Route path='/asteroidsandcomets' element={<AsteroidsAndComets/>}/>
  <Route path='/planets' element={<Planets/>}/>
  {/* <Route path='/mercury' element={<Home/>}/>
  <Route path='/venus' element={<Home/>}/>
  <Route path='/earth' element={<Home/>}/>
  <Route path='/mars' element={<Home/>}/>
  <Route path='/jupiter' element={<Home/>}/>
  <Route path='/saturn' element={<Home/>}/>
  <Route path='/uranus' element={<Home/>}/>
  <Route path='/neptune' element={<Home/>}/> */}
 </Routes>
    </div>
  );
}

export default App;
