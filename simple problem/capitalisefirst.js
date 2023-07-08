//capitalisefirst
// ['abc', 'pqr', 'xyz', 'jkl'] //['Abc', 'Pqr', 'Xyz', 'Jkl']

const capitalisefirst= function (arr){
    let result= []
    if(arr.length === 0) return []
    let s= arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s) //['Abc']
    return result.concat(capitalisefirst(arr.slice(1)))
}
let arr= ['abc', 'pqr', 'xyz', 'jkl']