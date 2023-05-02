import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { GeocodeService } from '@mapbox/mapbox-sdk/services/geocoding';
import axios from 'axios';

const Form = () => {
  const [postcode, setPostcode] = useState('');

  const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  mapboxgl.accessToken = accessToken;

  const handleSubmit = (event) => {
    event.preventDefault();

    const geocodeService = GeocodeService({
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    });

    // try {
    //   const response = await geocodeService.forwardGeocode({
    //     query: postcode,
    //     country: 'gb',
    //     limit: 1
    //   }).send();

    //   const { center } = response.body.features[0];

    //   console.log(center);
    //   // do something with the coordinates
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handlePostCodeChange = (event) => {
    setPostcode(event.target.value)
  }


  return (
    <div>

      <form onSubmit={handleSubmit} className="p-5 m-5 rounded bg-slate-100">
        <h2 className="text-lg font-bebas mb-3">Find your next munro</h2>
        <div className="flex justify-stretch">
          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            onChange={handlePostCodeChange}
            value={postcode}
            className="form-input rounded w-40" />
          {/* <input
            type="text"
            name="distance"
            placeholder="Distance to travel (kms)"
            className="form-input mx-3 rounded w-50"/> */}
          <input
            type="submit"
            value="Submit"
            className="bg-emerald-600 p-3 ms-3 rounded text-white" />
        </div>
      </form>
      <p>{postcode}</p>
    </div>
  )
}

export default Form
