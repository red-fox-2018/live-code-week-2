function tree(start, level, devided) {
    let result = [];

    for (let i = 1; i <= level; i++) {
        let temp = [];
        for (let j = 1; j <= i; j++) {
            temp.push(start);
        }

        result.push(temp);
    }

    return result;
}

console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

// console.log(tree(1, 8, 3))  //output: 9
// console.log(tree(1, 8, 8))  //output: 0

// console.log(tree(5, 6, 5))  //output: 21
// console.log(tree(5, 6, 10)) //output: 6