import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { getCountryDetails } from '../redux/countries/countriesSlice';
import './style/Country.css';

export default function Country() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const country = useSelector((state) => state.country.country);

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <p className="country-head">
        <BsArrowLeftCircle size="1.5rem" color="#ececec" className="bk-link" onClick={() => navigate(-1)} />
        {`Country - ${id}`}
      </p>
      <div className="country-container">
        {
          Object.entries(country).map(([id, countryData]) => (
            <div key={id}>
              <img src={countryData.coatOfArms.svg} alt={id} className="flag" width={80} height={80} />
              <div>{`Capital : ${countryData.capital}`}</div>
              <div>{`Population : ${countryData.population} people`}</div>
              <div>{`Area : ${countryData.area} square kilometers`}</div>
              <div>{`Latitude : ${countryData.latlng[0].toFixed(2)}`}</div>
              <div>{`Longitude : ${countryData.latlng[1].toFixed(2)}`}</div>
              <div>{`Region : ${countryData.region}`}</div>
              <div>{`Sub region : ${countryData.subregion}`}</div>
              <div>{`Timezone : ${countryData.timezones[0]}`}</div>
              <div>
                <div>language&#40;s&#41; :</div>
                {
                  Object.entries(countryData.languages).map(([id, language]) => (
                    <li key={id}>{language}</li>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
