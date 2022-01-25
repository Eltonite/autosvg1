export default function tileMap() {
  const numArray = [];
  const finalArray = [];
  for (let i = 0; i < 10; i++){
    numArray.push(Math.floor(Math.random() * 11) + 1)
  }
  console.log(numArray)

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

    if (index === 9){
      for(let i = 0; i < (item + 2); i++){
        level.push(0);
      }
      finalArray.push(level)
      level = []
    }
  })
  console.log(finalArray)

  return finalArray;
}
