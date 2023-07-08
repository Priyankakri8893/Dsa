// swap 2 string (a and b) without a 3rd variable
let x= 'something'
let y= 'good'
x= x+y
y= x.slice(0, x.length - y.length)
x= x.slice(y.length)

console.log(x+" "+y)
