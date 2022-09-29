import { useState, useEffect } from 'react';

function LaunchList(){

  const [launchArray, setLaunchArray] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches?limit=5')
      .then(res => res.json())
      .then(json => {
        setLaunchArray(json)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h3>Launch List</h3>
      {launchArray.map(singleLaunch => {
        return (
          <div>
            <img src={singleLaunch.links.mission_patch_small} alt="" height={50}/>
            <h4>{singleLaunch.mission_name}</h4>
          </div>
        );
      })}
    </div>
  )
}

export default LaunchList;