// reverse.js

function sol(arr, i, j){
    while(i<j){
    //swap
    arr[i]= arr[i]+arr[j]
    arr[j]= arr[i]-arr[j]
    arr[i]= arr[i]-arr[j]
    i++
    j--
}
return arr
}
let arr= [1, 2, 3, 4, 5]
let i= 0
let j= arr.length-1
console.log(sol(arr, i, j))