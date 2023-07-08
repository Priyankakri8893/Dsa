//rotate
let array= [1, 2, 3, 4, 5]
let k= 3      //[ 3, 4, 5, 1, 2 ]

// for(let i=0; i<k; i++){
//     array.unshift(array.pop())
// }
// console.log(array)

//other method
function reve(arr, i, j){
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

array= reve(array, 0, array.length-1)//reverse complete array

array= reve(array, 0, k-1) //first k element

array= reve(array, k, array.length-1)//last n-k

console.log(array)