import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Continent from './components/Continent';
import Country from './components/Country';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:id" element={<Continent />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
