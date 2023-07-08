//binary search
//time complexities O(logn)
//best case O(1)
//average case O(logn)

//search and sort
let arr= [3, 7, 11, 34, 78, 90, 92, 96, 98]// sorted array hai

function binarySearch(arr, start, end, num){
    if(start <= end){
        mid= Math.round((start+end)/2)
        if(num == arr[mid]){
           return mid 
        }else if(num > arr[mid]){
            return binarySearch(arr, mid+1, end, num) //recursion
        }else{ // num < arr[mid]
            return binarySearch(arr, start, mid-1, num) //recursion
        }
    }
    return false
}

let start= 0
let end= arr.length-1
let num= 90
console.log(binarySearch(arr, start, end, num))

//============================//
// let arr= [3, 7, 11, 34, 78, 90, 92, 96, 98]
// let num= 90

// function sol(arr, num){
//   let start= 0
//   let end= arr.length-1

//   while(start<=end){
//     mid= Math.round((start+end)/2)
//     if(num === arr[mid]){
//       return mid
//     }else if(num > arr[mid]){
//       start= mid+1
//     }else{
//       end= mid-1
//     }
//   }
//   return -1
// }

// console.log(sol(arr, num))





