import React from 'react';

function Coin() {

  const color1 = "gold"

  const x = 25;
  return (
  <svg className='m-1 coin-animation' width={x} height={x}>
    <circle cx={x/2} cy={x/2} r = {x/4} width={x} height={x} fill={color1} stroke={color1} strokeWidth={2}></circle>
  </svg>
  )
}

export default Coin;
