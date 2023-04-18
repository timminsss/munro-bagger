import './App.css'
import axios from 'axios';
import MunroData from './components/MunroData.js';
import MapboxMap from './components/MapboxMap';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/munros";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [munros, setMunros] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setMunros(items);
      }
    })
    return () => (mounted = false);
  }, []);

  return (
    <div className="App container">
      <MapboxMap munros={munros}/>
      <MunroData munros={munros}></MunroData>
    </div>
  );
}

export default App;
