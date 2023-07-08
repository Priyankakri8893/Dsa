// checkInteger
// take an input and check whether the input is an integer or not

function checkInt(input){
    if(input % 1 === 0){
        return true
    }else return false
}

// function checkInt(input) {
//     return /^-?\d+$/.test(input);
//   }

console.log(checkInt(23.25)) // false
console.log(checkInt(50.69)) // false
console.log(checkInt("hello")) // false
console.log(checkInt(23)) // true
console.log(checkInt(-20))
console.log(checkInt(0))

// - `^` asserts the start of the string.
// - `-?` allows for an optional minus sign.
// - `\d+` matches one or more digits.
// - `$` asserts the end of the string.

//           /^-?\[0-9]+$/
// \[0-9]+ matches one or more digits. The [0-9] character class specifies a range 
// from 0 to 9, representing any digit. The + quantifier means that one or 
// more digits should be present.
