import './App.css';
import axios from 'axios';
import Munros from './components/munros.js';
import Geomap from './components/geomap.js';
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
    <div className="App">
      <Geomap></Geomap>
      {/* <Munros munros={munros}></Munros> */}
    </div>
  );
}

export default App;
