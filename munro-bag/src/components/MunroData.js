import React from 'react';

function Munros(props) {

  return (
    <div>
      {props.munros.map((munro) => {
        return <div key={munro.id} className="m-5 p-1 border-solid border-1">
          <h2 className="text-xl font-bold">{munro.name} - {munro.region}</h2>
          <p>Region - {munro.region}</p>
          <p>Height - {munro.altitude}m</p>
          <p>Duration - {munro.duration}</p>
        </div>
      })}
    </div>
  )
}

export default Munros
