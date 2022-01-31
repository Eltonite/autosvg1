import React from 'react';

function Player() {


  const x = 40;
  return (
    <svg className='m-1 tile-animation' width={x} height={x}>
      <rect x={x/4} y={x/4} width={x/2} height={x/2} fill="white" stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default Player;
