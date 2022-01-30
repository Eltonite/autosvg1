export default function tileMap(numCols,numRows) {
  const numArray = [];
  const finalArray = [];
  numCols = numCols - 2;
  numRows = numRows - 2;

  for (let i = 0; i < numRows; i++){
    let randNum = Math.floor(Math.random() * numCols) + 1
    if ((randNum % 2) === 0){
      numArray.push(randNum + 1)
    } else numArray.push(randNum);
  }

  numArray.forEach((item, index) => {
    let level = [];
    if (index === 0){
      for(let i = 0; i < (item + 2); i++){
        level.push(0);
      }
      finalArray.push(level)
      level = []
    }
    
    level.push(0);
    for(let i = 0; i < item; i++){
      level.push(1);
    }
    level.push(0);
    finalArray.push(level)
    level = []

    if (index === numArray.length - 1){
      for(let i = 0; i < (item + 2); i++){
        level.push(0);
      }
      finalArray.push(level)
      level = []
    }
  })

  // Smoothing out edge-walls OPTION 1
  // for(let i = 0; i < finalArray.length - 2; i++){

  //   let diff = finalArray[i].length - finalArray[i+1].length;
  //   console.log(diff);

  //   if (diff < 0){
  //     for (let j = 0; j < Math.abs(diff/2); j++){
  //       finalArray[i].push(0);
  //       finalArray[i].unshift(0);
  //     }
  //   }
  //   else if (diff > 0){
  //     for (let j = 0; j < Math.abs(diff/2); j++){
  //       finalArray[i+1].push(0);
  //       finalArray[i+1].unshift(0);
  //     }
  //   }
  // }

  // finalArray.forEach((item)=>{
  //   console.log(item);
  // })


  // Smoothing out edge-walls OPTION 2
  // finalArray.forEach((item)=>{
  //   let diff = (numCols + 2) - (item.length);
  //   if (diff > 0){
  //     for (let j = 0; j < diff/2; j++){
  //       item.push(0);
  //       item.unshift(0);
  //     }
  //   }
  // })

  // Randomizing edge-walls OPTION 3
  finalArray.forEach((item)=>{
    let diff = (numCols + 2) - (item.length);
    if (diff > 0){
      for (let j = 0; j < diff/2; j++){
        item.push(Math.floor(Math.random()*2));
        item.unshift(Math.floor(Math.random()*2));
      }
    }
  })

  return finalArray;
}
