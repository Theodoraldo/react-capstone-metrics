import React, { useState } from 'react';
import './style/Home.css';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import europe from '../assets/europe.svg';
import afirca from '../assets/africa.svg';
import asia from '../assets/asia.svg';
import america from '../assets/america.svg';
import oceania from '../assets/oceania.svg';
import antarctic from '../assets/antarctica.svg';

const continentList = [
  { id: 1, continent: 'Africa', map: afirca },
  { id: 2, continent: 'America', map: america },
  { id: 3, continent: 'Antarctic', map: antarctic },
  { id: 4, continent: 'Asia', map: asia },
  { id: 5, continent: 'Europe', map: europe },
  { id: 6, continent: 'Oceania', map: oceania },
];

export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="home-header-container">
        <p className="home-header">The World&#8217;s Continent</p>
      </div>
      <div className="search-head">
        <input type="text" className="search" placeholder="Search country here ...." onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="wrap">
        {
          continentList.filter((continent) => (
            search.toLowerCase() === '' ? continent : continent.continent.toLowerCase().includes(search)
          )).map((continent) => (
            <div key={continent.id} className="continent">
              <div className="cont-head">
                <div>{continent.continent}</div>
                <button type="button" className="arrow-right">
                  <Link to={`continent/${continent.continent}`}><BsArrowRightCircle size="1.5rem" color="#ececec" /></Link>
                </button>
              </div>
              <div className="cont-body">
                <p className="cont-name">{continent.continent}</p>
                <img src={continent.map} alt="continent logo" width={200} />
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
