function tree(start, level, divider) {
  var numbers = []
  var result = []
  var counter = 1
  var nums = start
  for(var i = 0; i < level; i++) {
    var row = []
    var multiply = i
    // console.log('i === ', i);
    numbers.push(start)
    for(var j = 1; j <= i; j++) {
      // console.log('j --- ', j);
      if(j === i) {
        numbers.push(start)
      } else {
        numbers.push(nums*= multiply)
      }
    }
    // counter++
    // numbers.push(row)
  }
  // console.log(numbers);
  var countOnMe = 0
  var map = numbers.map(x => x % divider)
  for(let k in map) {
    if(map[k] === 0) {
      countOnMe++
    }
  }
  return countOnMe
}



console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6
