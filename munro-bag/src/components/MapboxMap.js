
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxMap.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MyMapboxMap(props) {

  const munros = props.munros;
  const mapContainer = useRef(null);
  const bounds = new mapboxgl.LngLatBounds();

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [-4.2026, 56.4907],
        zoom: 7
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers to map from Rails api
    munros.map((munro) => {
      const marker = new mapboxgl.Marker({
        color: '#40916c'
      })
        .setLngLat([munro.longitude, munro.latitude])
        .addTo(map)

      bounds.extend([munro.longitude, munro.latitude]);

      // markerCoords.push([munro.longitude, munro.latitude]);
      map.fitBounds(bounds, { padding: 50 });

      const popup = new mapboxgl.Popup({
        offset: 25,
      }).setHTML(
        `<div>
          <h1>${munro.name}</h1>
          <p>${munro.altitude}m</p>
          <p>${munro.region}</p>
        </div>`
        )
        marker.setPopup(popup);
    });

}, [munros]);

  return (
    <div ref={mapContainer} className="map-container" />
  )
}

export default MyMapboxMap
