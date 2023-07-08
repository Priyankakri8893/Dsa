// reverse each word of string 
// "hi to all" // "ih ot lla"

function reve(str){
    if(str.length === 0) return ""
    return reve(str.slice(1)) + str[0]
}

const reverseEachWord= function (str){
    let words= str.split(" ")
    for(let i=0; i<words.length; i++){
        words[i]= reve( words[i] )
    }
    return words.join(" ")
}
let str= "hi to all"
console.log(reverseEachWord(str))