function tree(start, level, divider) {
    let arrData = [];
    let count = 0;
        arrData[0] = [start];
        arrData[1] = [start,start];
    for (var i = 2; i < level; i++){
        arrData[i] = [start];
        for (var j = 1; j <= i -1; j++){
            arrData[i][j] = arrData[i-1][j] + arrData[i-1][j-1];
            arrData[i].push(start);
        }
    }
    
    for(let i=0;i<arrData.length;i++){
        for(let j=0;j<arrData[i].length;j++){
            if(i<2){
                if(arrData[i][j]%divider === 0){
                    count++
                }
            }
            else{
                if(j!==arrData[i].length){
                    if(arrData[i][j]%divider === 0){
                        count++
                    }
                }
            }
        }
    }
    return count
}



console.log(tree(1, 6, 3))  //output: 3
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6