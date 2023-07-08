
//given an array of repeated elements, return the most repeated element from the array
//highest frequency element in an array

let arr= [23, 56, 678, 12, 2, 34, 56, 23, 8, 23]
const sol= function (arr) {
    let map= new Map()
    let count= -Infinity
    let res= 0
    for(let nums of arr){
        map.set(nums, (map.get(nums) || 0)+1)
        if(map.get(nums) > count){
            count= map.get(nums)
            res= nums
        }
    }
    return res
}
console.log(sol(arr))