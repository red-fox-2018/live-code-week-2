function tree(start, level, divider) {
	let arrnum = []
	let counter = start
	for(let i=0;i<level;i++){
		arrnum.push([])
		for(var j=0;j<=i;j++){
			arrnum[i].push(start)
		}
	}
	for(var i=2;i<arrnum.length;i++){
		for(var j=1;j<arrnum[i].length-1;j++){
			if (i===2) {
				if (j===1 || j===arrnum[i].length-2) {
				arrnum[i][j]+=1
				}
			}
			
			if (i>=3) {
				if (j===2 || j===arrnum[i].length-3) {
					arrnum[i][j]+=2
				}
			}
			if (i===4) {
				if (j===2 || j===arrnum[i].length-3) {
					arrnum[i][j]+=3
					arrnum[i][1]+=3
					arrnum[i][arrnum[i].length-2]+=3
				}
			}
			if (i===5) {
				if (j===2 || j===arrnum[i].length-3) {
					arrnum[i][1]+=2
					arrnum[i][arrnum[i].length-2]+=2
					arrnum[i][1]= arrnum[i-1][0]+arrnum[i-1][1]
					arrnum[i][2]= arrnum[i-1][1]+arrnum[i-1][2]
					arrnum[i][3]= arrnum[i-1][2]+arrnum[i-1][3]
				}
			}
			if (i===6) {
				if (j===2 || j===arrnum[i].length-3) {
					arrnum[i][1]+=2
					arrnum[i][arrnum[i].length-2]+=2
					arrnum[i][1]= arrnum[i-1][0]+arrnum[i-1][1]
					arrnum[i][2]= arrnum[i-1][1]+arrnum[i-1][2]
					arrnum[i][3]= arrnum[i-1][2]+arrnum[i-1][3]
				}
			}
		}
	}
	let counterOutput = 0
	for(var i=0;i<arrnum.length;i++){
		for(var j=0;j<arrnum[i].length;j++){
			if (arrnum[i][j]%divider===0) {
				counterOutput++
			}
		}
	}
	return counterOutput
}



console.log(tree(1, 6, 3))  //output: 3
// 1
// 1,1
// 1,2,1
// 1,3,3,1
// 1,4,6,4,1
// 1,5,10,10,5,1
console.log(tree(1, 6, 2))  //output: 6

console.log(tree(1, 8, 3))  //output: 9
console.log(tree(1, 8, 8))  //output: 0

console.log(tree(5, 6, 5))  //output: 21
console.log(tree(5, 6, 10)) //output: 6