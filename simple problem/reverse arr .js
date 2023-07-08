// reverse array without using extra array
let arr= [12, 4, 67, 2, 34, 100] //[ 100, 34, 2, 67, 4, 12 ]
let i= 0
let j= arr.length-1
while(i<j){
    arr[i]= arr[i]+arr[j]
    arr[j]= arr[i]-arr[j]
    arr[i]= arr[i]-arr[j]
    i++
    j--
}
console.log(arr)