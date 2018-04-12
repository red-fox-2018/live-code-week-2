function tree(start,level,divider){ 
    var array = [[start]] 
    var counting = array[0][0]%divider==0?1:0 
    for(i=1;i<level;i++){ 
      array[i]=[array[i-1][0]] 
      counting+=array[i-1][0]%divider==0?1:0 
      for(j=0;j<array[i-1].length;j++){ 
        var a = array[i-1][j+1]==undefined? 0:array[i-1][j+1] 
        var b = array[i-1][j]+a 
        array[i].push(b) 
        counting+=b%divider==0?1:0 
      } 
    } 
    return counting 
  }

  console.log(tree(1, 6, 3))  //output: 3
  console.log(tree(1, 6, 2))  //output: 6
  
  console.log(tree(1, 8, 3))  //output: 9
  console.log(tree(1, 8, 8))  //output: 0
  
  console.log(tree(5, 6, 5))  //output: 21
  console.log(tree(5, 6, 10)) //output: 6

