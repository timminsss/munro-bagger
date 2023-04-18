import React from 'react';

function Munros(props) {

  return (
    <div>
      {props.munros.map((munro) => {
        return <div key={munro.id}>
          <h2>{munro.name} - {munro.region}</h2>
          <p>{munro.height}m</p>
        </div>
      })}
    </div>
  )
}

export default Munros
