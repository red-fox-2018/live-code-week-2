function tree(start, level, divider) {
	for(let i=0;i<level;i++) {
		let temp=''
		for(let j=0;j<=i;j++) {
			if(j=0) {
				temp+='x'
			}else {
				temp+='*'
			}
		}
		console.log(temp);
	}
}

tree(2,4)

// for(var i=0;i<4;i++) {
// 	var store='';
// 	for(var j=0;j<=i;j++) {
// 		store+='*'
// 	}
// 	console.log(store)
// }