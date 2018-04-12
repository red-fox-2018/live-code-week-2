function tree(start, level, divider) {
  var tmp = [];
  var point = 0;
  var count = 0;

  for(var i = 1 ; i < level; i++){
    for(var j = 0 ; j < i ; j++){
      if(j === 0 || j === i){
        tmp.push(start*i);
        count++;
      }
      else if(j === count){
        tmp.push(start*j);
      }
      else if(j === count - 1 || j === count + 1){
        tmp.push(start*count);
      }
      else{
        tmp.push(start*i);
      }
    }
  }

  for(var k = 0 ; k < tmp.length ; k++){
    if(tmp[k] % divider === 0){
      point++;
    }
  }

  return point;
}



console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6
//
console.log(tree(1, 8, 3))  //output: 9
// console.log(tree(1, 8, 8))  //output: 0
//
// console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6
