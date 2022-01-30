import React from 'react';

function NoTile() {

  const color = ["#211210","#5e2d20","#c76b2a", "#f0c260"]

  const FinalColor = Math.floor(Math.random()*4)

  const x = 40;
  return (
    <svg className='m-1 tile-animation' width={x} height={x}>
      <rect width={x} height={x} fill='black' stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default NoTile;
