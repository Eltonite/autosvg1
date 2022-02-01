const movePlayerDirs = (posArray, dir) => {
  const nextPosArray = [];
  let nextPos = 0;

  let posX = -1;
  let posY = -1;
  let foundPos = false;
  let templateArrayX = 0;
  let templateArrayY = 0;


  posArray.map((row) => {
    if(!foundPos){
      row.map((item) => {
        if(item === 1 && !foundPos){
          foundPos = true;
          posX = row.indexOf(item);
          templateArrayX = row.length;
          templateArrayY = posArray.length;
        }
      })
      posY = posArray.indexOf(row);
    }
  })

  console.log(templateArrayX,templateArrayY)
  console.log([posX,posY])
  const newPosArray = moveCoord(posX,posY, dir);
  console.log(newPosArray);


  posX = 0;
  posY = 0;

  posArray.map((row) => {
    const nextRowArray = [];

    row.map((item) => {
      if (posX === newPosArray[0] && posY === newPosArray[1]){
        nextRowArray.push(1);
        console.log("pushed value")
        posX += 1;
      }
      else{
        nextRowArray.push(0);
        posX += 1;
      }
    })

    nextPosArray.push(nextRowArray);
    posY += 1;
    posX = 0;

  })

  console.log(nextPosArray)

  return nextPosArray;
}

export default movePlayerDirs;


const moveCoord = (x,y, someDir) => {
  if (someDir === 'up'){
    y -= 1;
    return [x,y, someDir]
  }
  else if (someDir === 'down'){
    y += 1;
    return [x,y, someDir]
  }
  else if (someDir === 'left'){
    x -= 1;
    return [x,y, someDir]
  }
  else if (someDir === 'right'){
    x += 1;
    return [x,y, someDir]
  }
}