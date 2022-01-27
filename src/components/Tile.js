import React from 'react';

function Tile() {
  const color1 = "#7FFFD4"
  const color2 = "orange"
  const color3 = "#7a00cc"

  const color = ["#211210","#5e2d20","#c76b2a", "#f0c260"]

  const FinalColor = Math.floor(Math.random()*4)

  const x = 40;
  return (
    <svg className='m-1 tile-animation' width={x} height={x}>
      <rect width={x} height={x} fill={color3} stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default Tile;
