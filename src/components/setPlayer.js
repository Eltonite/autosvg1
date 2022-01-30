const setPlayer = (posArray) => {
  const baseMapArray = posArray;
  const initPosArray = [];


  let isPlaced = false;
  baseMapArray.map((arr) => {
    let rowPosArray = [];

    arr.map((item)=> {
      if (item === 0){
        rowPosArray.push(0);
      } 
      else if (item === 1){
        const playerYes = Math.floor(Math.random()*3)
        if (playerYes == 1 && !isPlaced){
          rowPosArray.push(1);
          isPlaced = true;
        }
        else{
          rowPosArray.push(0);
        }
      } 
    })
    initPosArray.push(rowPosArray)
  })

  console.log(initPosArray)

  return initPosArray;
}

export default setPlayer;