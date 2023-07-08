//fooBar
//take a number and if number is multiple of 3 print "Foo"
//if number is multiple of 5 print "Bar"
//and if number is multiple of both 5 and 3 print "FooBar"
//if not a multiple of either, print nothing

function sol(input){
    if(input%3===0 && input%5===0) return "FooBar"
    if(input%3===0) return "Foo"
    if(input%5===0) return "Bar"
}
console.log(sol(25))
console.log(sol(15))
console.log(sol(20))
console.log(sol(6))