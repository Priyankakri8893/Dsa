//find without pair 
let arr= [11, 1, 7, 11, 1, 2, 2, 3, 3, 48, 4, 48, 4, 8, 4] // [ 7, 4, 8 ]

let map= new Map()

for(let i=0; i<arr.length; i++){
    map.set(arr[i], (map.get(arr[i]) || 0)+1)
}

let ans= []

for(let key of map.keys()){
    if(map.get(key) % 2 !== 0){
        ans.push(key)
    }
}

console.log(ans)