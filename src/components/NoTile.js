import React from 'react';

function NoTile() {

  const x = 25;
  return (
    <svg className='m-1' width={x} height={x}>
      <rect width={x} height={x} fill='grey' stroke='white' strokeWidth={5} ></rect>
    </svg>
  )
}

export default NoTile;
