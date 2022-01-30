const movePlayer = (posArray) => {
  const nextPosArray = [];
  let nextPos = 0;

  posArray.map((row) => {
    const nextRowArray = [];

    row.map((item) => {
      if (nextPos === 1){
        nextRowArray.push(1);
        nextPos = 0;
      }
      else if(item === 1 && nextPos === 0){
        nextRowArray.push(0);
        nextPos = 1;
      }
      else {
        nextRowArray.push(0);
      }
    })
    nextPosArray.push(nextRowArray);
  })

  console.log(nextPosArray)

  return nextPosArray;
}

export default movePlayer;