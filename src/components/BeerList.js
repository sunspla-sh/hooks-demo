import { useState, useEffect } from 'react';

function BeerList(){

  const [myBeers, setMyBeers] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=10&page=3')
      .then(res => res.json())
      .then(json => setMyBeers(json))
      .catch(err => console.log('error during fetch', err))
  }, [])

  return (
    <div>
      <h3>Beer List</h3>
      {myBeers.map(singleBeer => {
        return (
          <div>
            <img src={singleBeer.image_url} alt={singleBeer.name} height={50} />
            <p>{singleBeer.name}</p>  
          </div>
          
        );
      })}
    </div>
  );

}

export default BeerList;