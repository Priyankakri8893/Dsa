// find the maximum sum of any two elements in an array
let array= [12, 4, 67, 2, 34, 100] //

function maxsum(array){
    let firlar= -Infinity
    let seclar= -Infinity
    for(let nums in array){
        if(array[nums] > firlar){
            firlar= array[nums]
        }
    }
    for(let nums in array){
        if(array[nums] > seclar && array[nums] < firlar){
            seclar= array[nums]
        }
    }
    return firlar + seclar
}
console.log(maxsum(array))