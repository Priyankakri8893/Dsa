//print the duplicates in an array
//[23, 3, 2, 1, 3, 8, 23]

const sol= function (arr){
    let map= new Map()
    let res= []
    for(let i= 0; i<arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0)+1)
    }
    console.log(map)
    for(let pairs of map){
        if(pairs[1]>1) res.push(pairs[0])
    }
    return res
}
let arr= [23, 3, 2, 1, 3, 8,3, 23] //[ 23, 3 ]
console.log(sol(arr))


// const sol= function (arr){
//     let map= new Map()
//     let res= []
//     for(let num of arr){
//         map.set(num, (map.get(num)||0)+1)
//     }

//     for(let num of map.keys()){
//         if(map.get(num)>1) res.push(num)
//     }
//     return res
// }
// let arr= [23, 3, 2, 1, 3, 8,3, 23] //[ 23, 3 ]
// console.log(sol(arr))