let arr= [56, 20, 30, 45, 11, 89, 5]// 56+89= 145

let sum= 0
let max= 0
let smax= 0
let tmax= 0

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        tmax= smax
        smax= max
        max= arr[i]
    }else if(arr[i]>smax){
        tmax= smax
        smax= arr[i]
    }else if(arr[i]>tmax){
        tmax= arr[i]
    }
}

sum= max+smax
console.log(sum)

//other method

// let arr= [56, 20, 30, 45, 11, 89, 5]// 56+89= 145

// function sol(arr){
//   let max= 0
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//       max= arr[i]
//     }
//   }

//   let smax= 0
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]>smax && arr[i]<max){
//       smax= arr[i]
//     }
//   }

//   return max+smax
// }

// console.log(sol(arr))