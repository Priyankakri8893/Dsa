// swap 2 number (a and b) without a 3rd variable
let a= 5
let b= 10

// not allowed
let temp= a
a= b
b= temp

// this allowed
a= a+b //a= 15, b=10
b= a-b //b=5, a= 15
a= a-b //a=10, b=5
console.log(a, " ", b)