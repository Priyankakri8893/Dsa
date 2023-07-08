// write a js program to cyclically rotate an array - 
// rotate(arr, d) that rotates arr by d elements

// let arr= [12, 3, 6, 2, 9, 11], d= 2
// const sol= function (arr, d){
//     while(d > 0){
//         let i= arr.length-1
//         let num= arr[i]
//         arr.pop(num)
//         arr.unshift(num)
//         d--
//         i--
//     }
//     return arr
// }
// console.log(sol(arr, d))

// other method
// let arr = [12, 3, 6, 2, 9, 11];
// let d = 2;

// const rotate = function (arr, d) {
//   if (d === 0) return arr;

//   const n = arr.length;
//   d = d % n;

//   const rotatedPart = arr.slice(0, n - d);
//   const remainingPart = arr.slice(n - d);

//   return remainingPart.concat(rotatedPart);
// };

// const rotatedArray = rotate(arr, d);
// console.log(rotatedArray);


//******************************** */

let arr= [12, 3, 6, 2, 9, 11], d= 8
const sol= function (arr, d){
    if(d === 0) return arr;

    let n= arr.length
    if(d>n) d= d-n

    let notrotate= arr.slice(0, n-d)
    let rotate= arr.slice(n-d)

    return rotate.concat(notrotate)
}
console.log(sol(arr, d))
