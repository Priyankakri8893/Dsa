// 3. Merge Sort:
//    - Definition: Merge Sort follows the divide-and-conquer approach. It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to obtain a final sorted array.
//    - Code:

function mergeSort(arr) {
  if (arr.length <= 1) {
    return; // Base case: if the array has 0 or 1 element, no need to sort
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // Divide the array into two halves
  const right = arr.slice(mid);

  mergeSort(left); // Recursively sort the left half
  mergeSort(right); // Recursively sort the right half

  merge(arr, left, right); // Merge the sorted halves back into the original array
}

function merge(arr, left, right) {
  let i = 0;
  let j = 0;
  let k = 0;

  // Compare elements from both halves and update the original array
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  // Add any remaining elements from the left half
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  // Add any remaining elements from the right half
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

let arr = [233, 12, 6, 89, 34, 56];
mergeSort(arr);
console.log(arr);



//    - Time Complexity:
//      - Worst-case: O(n log n)
//      - Average-case: O(n log n)
//      - Best-case: O(n log n)
//    - Space

//  Complexity: O(n) (additional space for the merge function)




