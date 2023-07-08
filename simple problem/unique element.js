// find unique element in an arr
let arr= [1, 1, 2, 22, 3, 5, 11, 2] //[ 3, 5, 11, 22 ]

let fre= {}

for(let i= 0; i<arr.length; i++){
    fre[arr[i]]= (fre[arr[i]] || 0) + 1
}

let res= []

for(let num in fre){
    if(fre[num] === 1){
        res.push(Number(num))
    }
}

console.log(res)


// let arr= [1, 1, 2, 22, 3, 5, 11, 2]

// function sol(arr){
//   let map= new Map()
//   for(let i=0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i])||0)+1)
//   }
// let res= []
//   for(let num of map){
//     if(num[1]===1){
//       res.push(num[0])
//     }
//   }
//   return res
// }

// console.log(sol(arr))