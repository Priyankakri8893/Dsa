n= 7  // find all prime number between 1 to n  //tc O(n√n)
let check= true
let res= []
for(let i=2; i <= n; i++){
    let isPrime= true
    for(let j=2; j*j <= i; j++){
        if(i%j === 0){// i is a factor of n
            isPrime= false
            break
        }
    }
    if(isPrime){
        res.push(i)
    }
}

if (n === 1) {
    console.log("");
} else if (n > 1) {
    console.log(res);
} 

// 1 2 3 4 5 6  7 8 9 10 11 12 13 14 15  // 2 3 5 7 11 13