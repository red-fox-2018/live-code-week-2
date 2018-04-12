function tree(start, level, divider) {
    let level1 = 4

    let tree =  ""
    for(let i=1;i<=level1;i++){
        for(let k=0;k<i;k++){
            tree += k
        }
        tree += "\n"
    }
    console.log(tree)
}



console.log(tree(1, 6, 3))  //output: 3
// console.log(tree(1, 6, 2))  //output: 6

// console.log(tree(1, 8, 3))  //output: 9
// console.log(tree(1, 8, 8))  //output: 0

// console.log(tree(5, 6, 5))  //output: 21
// console.log(tree(5, 6, 10)) //output: 6