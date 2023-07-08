let n= 4  //check n is prime or not 

// first method   tc= n or sc= 1
// let check= true
// for(let i=2; i<n; i++){
//     if(n%i === 0){// i is a factor of n
//         check= false
//         break
//     }

// }

// if (n === 1) {
//     console.log("neither prime nor composite");
// } else if (check) {
//     console.log(check);
// } else {
//     console.log(check);
// }

// second method tc= square root of n or sc= 1

let check= true
for(let i=2; i*i <= n; i++){
    if(n%i === 0){// i is a factor of n
        check= false
        break
    }

}

if (n === 1) {
    console.log("neither prime nor composite");
} else if (check) {
    console.log(check);
} else {
    console.log(check);
}