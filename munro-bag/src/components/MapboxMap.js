
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxMap.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MyMapboxMap(props) {

  const munros = props.munros;
  const mapContainer = useRef(null);
  // const map = useRef(null);
  const [lat, setLat] = useState(56.4907);
  const [lng, setLng] = useState(-4.2026);
  const [zoom, setZoom] = useState(7);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [lng, lat],
        zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers to map from Rails api
    props.munros.map((munro) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([munro.longitude, munro.latitude])
        .addTo(map)
      // const popup = new mapboxgl.Popup({ offset: 25}).setText(`${munro.name} - ${munro.altitude}m`)
      const popup = new mapboxgl.Popup({ offset: 25}).setHTML(
        `<h1>${munro.name}</h1>
        <p>${munro.altitude}m</p>`
        )
      marker.setPopup(popup);
    }
    );


}, [props.munros, lat, lng, zoom]);

  return (
    <div ref={mapContainer} className="map-container" />
  )
}

export default MyMapboxMap
