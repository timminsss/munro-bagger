import React, { useState } from 'react';
import ReactMapGL, { Map } from 'react-map-gl';
import './geomap.css'


const Geomap = () => {

  const [viewport, setViewport] = useState({
    latitude: 56.4907,
    longitude: -4.2026,
    zoom: 6
  });

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Map />
      </ReactMapGL>
    </div>
  )

}

export default Geomap
