import React from 'react';

function Actors(props) {
  return (
    <div className='imageDiv'>
        <img src={props.image}></img>
        <h3>{props.rname}</h3>
        <p>{props.cname}</p>
    </div>
  )
}

export default Actors;