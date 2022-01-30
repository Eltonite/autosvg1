import React from 'react';

function EmptyTile() {
  
  const x = 40;
  return (
    <svg className='m-1' width={x} height={x}>
      <rect width={x} height={x} fill='black' fillOpacity={0} strokeWidth={2} ></rect>
    </svg>
  )
}

export default EmptyTile;
