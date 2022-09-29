import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';


function CountryPage(){

  const { countryCode } = useParams();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(res => res.json())
      .then(json => setCountryData(json[0]))
      .catch(err => console.log('err fetching individual country', err))

  }, [countryCode])

  return (
    <div>
      {countryData ? (
        <div>
          <h2>{countryData.name.common}</h2>
          <p>Country Code: {countryData.cca3}</p>
          <p>Capital City: {countryData.capital[0]}</p>
          <img
            src={countryData.flags.png}
            alt={countryData.name.common}
            height={countryData.cca3 === 'USA' ? 300 : 100}
          />
        </div>
      ) : (
        <div>loading... no country data yet</div>
      )}
    </div>
  );
}

export default CountryPage;