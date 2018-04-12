function tree(start, level, divider) {

  let result =[]
  for (var i = 0; i < level; i++) {
    let row=[]
    for (var j= 0; j < level; j++) {
      if(i==0 && j ==0){
        row.push(start)
      }else if(i=1 && j){
        row.push(start += start)
      }
    }
    result.push(row)
  }
  return result
}



console.log(tree(1, 6, 3))  //output: 3
//console.log(tree(1, 6, 2))  //output: 6

// console.log(tree(1, 8, 3))  //output: 9
// console.log(tree(1, 8, 8))  //output: 0
//
// console.log(tree(5, 6, 5))  //output: 21
// console.log(tree(5, 6, 10)) //output: 6
