// Bubble Sort Complexity
// Time Complexity	 
// Best	O(n)
// Worst	O(n2)
// Average	O(n2)
// Space Complexity	O(1)
// Stability	Yes


//bubble sort: simplest and also popular
//check the elements adjacent to each other and swaps then if leftElement > rightElement

let arr= [233, 12, 6, 89, 34, 56]
let bubblesort= function (arr) {
    for(let i=0; i<arr.length; i++){
        let swap= false
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                //swap
                arr[j]=arr[j]+arr[j+1]
                arr[j+1]= arr[j]-arr[j+1]
                arr[j]= arr[j]- arr[j+1]
                swap= true
            }
        }
        if(swap == false) break;
    }
    return arr;
}

console.log(bubblesort(arr))