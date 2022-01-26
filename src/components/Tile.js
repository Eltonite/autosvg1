import React from 'react';

function Tile() {

  const x = 25;
  return (
    <svg className='m-1 tile-animation' width={x} height={x}>
      <rect width={x} height={x} fill='#7FFFD4' stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default Tile;
