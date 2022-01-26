import React from 'react';

function EmptyTile() {
  
  const x = 25;
  return (
    <svg className='m-1' width={x} height={x}>
      <rect width={x} height={x} fill='green' fillOpacity={0} strokeWidth={2} ></rect>
    </svg>
  )
}

export default EmptyTile;
