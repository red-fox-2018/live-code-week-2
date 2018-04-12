function tree(start, level, divider) {
  let arrBoard = []
  // for(let i=0;i<level;i++){
  //   let a = []
  //   arrBoard.push(a)
  // }

  // console.log(arrBoard)
  for(let j=0;j<level;j++){
    arrTmp=[]
    let count = 1
    let isi =0
    for (let k= 0; k < level; k++) {
      if(j === 0 && k === 0){
          arrTmp.push(start)
      }
      if(j===1){
        if(k===0 || k===1){
          arrTmp.push(start)
        }else{
          arrTmp.push('')
        }
      }if(j===2){
        if(k===0 || k===2){
          arrTmp.push(start)
        }else if(k===1){
          arrTmp.push(start*2)
        }else{
          arrTmp.push('')
        }
      }
      if(j>2 && j%2 === 1){
        console.log(k,'k====',Math.floor(j/2));
        if(k === 0 || k===j){
          arrTmp.push(start)
        }

        else if(k <= Math.floor(j/2)){
          isi = start * j * count
          console.log(start,j,count)
          arrTmp.push(isi)
          count++
        }else if(k > Math.floor(j/2) && k < j){
          arrTmp.push(isi)
          count--
          isi = isi/count
        }else{
          arrTmp.push('')
        }
      }
      if(j>2 && j%2 === 1){
        console.log(k,'k====',Math.floor(j/2));
        if(k === 0 || k===j){
          arrTmp.push(start)
        }

        else if(k <= Math.floor(j/2)){
          isi = start * j * count
          console.log(start,j,count)
          arrTmp.push(isi)
          count++
        }else if(k > Math.floor(j/2) && k < j){
          arrTmp.push(isi)
          count--
          isi = isi/count
        }else{
          arrTmp.push('')
        }
      }

    }
    arrBoard.push(arrTmp)
  }
  console.log(arrBoard)
}



console.log(tree(1, 6, 3))  //output: 3
// console.log(tree(1, 6, 2))  //output: 6
//
// console.log(tree(1, 8, 3))  //output: 9
// console.log(tree(1, 8, 8))  //output: 0
//
// console.log(tree(5, 6, 5))  //output: 21
// console.log(tree(5, 6, 10)) //output: 6
