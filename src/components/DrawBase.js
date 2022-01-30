import React from 'react';

function DrawBase(x,y) {
  const scale = 40;
  const frameX = (x+2) * scale;
  const frameY = (y+2) * scale;

  return (
    <svg className='m-2 notile-animation' width={frameX} height={frameY}>
      <rect width={frameX} height={frameY} fill='black' stroke='white' strokeWidth={2} ></rect>
    </svg>
  )
}

export default DrawBase;
