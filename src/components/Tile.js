import React from 'react';

function Tile() {
  const color1 = "#7FFFD4"
  const color2 = "orange"
  const color3 = "#7a00cc"

  const x = 25;
  return (
    <svg className='m-1 tile-animation' width={x} height={x}>
      <rect width={x} height={x} fill={color3} stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default Tile;
