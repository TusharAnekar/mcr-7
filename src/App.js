import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Countries } from './pages/Countries/Countries';
import { Cities } from './pages/Cities/Cities';
import { City } from './pages/City/City';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:continentId' element={<Countries/>}></Route>
        <Route path='/:continentId/:countryId' element={<Cities/>}></Route>
        <Route path='/:continentId/:countryId/:cityId' element={<City/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
