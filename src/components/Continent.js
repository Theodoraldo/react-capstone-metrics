import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getContinentDetails } from '../redux/continent/continentDetailsSlice';
import './style/Continent.css';

export default function Continent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const continent = useSelector((state) => state.continent.continent);
  const { isLoading, error } = useSelector((state) => state.continent);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getContinentDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <p className="continent-head">
        <BsArrowLeftCircle size="1.5rem" color="#ececec" className="bk-link" onClick={() => navigate(-1)} />
        {`Continent - ${id}`}
      </p>
      <div className="search-head">
        <input type="text" className="search" placeholder="Search country here ...." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {error && <div className="alert alert-danger">Ooops, an error has occured</div>}
      {isLoading && <div className="alert alert-info">Loading .......</div>}
      <div className="continent-container">
        {Object.entries(continent).map(([id, rawData]) => (
          <>
            <div className="country-detail-head">
              <Link to={`/country/${rawData.name.common}`}><BsArrowRightCircle size="1.5rem" color="#ececec" className="link-detail" /></Link>
            </div>
            <div key={id} className="continent-details">
              <div className="detail-left">
                <img src={rawData.flags.svg} alt={id} className="flag" width={40} height={40} />
                <div className="limit">{rawData.name.common}</div>
              </div>
              <div className="detail-right">
                <div className="limit">{`Latitude : ${rawData.latlng[0].toFixed(2)}`}</div>
                <div className="limit">{`Longitude : ${rawData.latlng[1].toFixed(2)}`}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
