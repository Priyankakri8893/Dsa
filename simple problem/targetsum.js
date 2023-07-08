// targetSum  => interview
// find unique pairs of elements (inside an array) whose sum is equal to a target k

let arr= [7, 2, 4, 6, 9, 11, 34, 3, 2, 1]
let k= 5

function sol(arr, k){
  let map= new Map()
  let res= []
  for(let i=0; i<arr.length; i++){
    let num= k-arr[i]
    if(map.has(num)){
      res.push([num, arr[i]])
    }else{
      map.set(arr[i], i)
    }
  }
  return res
}

console.log(sol(arr, k))