function change(array) {
  let arr = array.slice(0);
}

// function partitioning(arr, start, end) {
//   //   let startPoint;
//   //   let endPoint;

//   let i = 1;
//   while (i < arr.length) {
//     for (let j = arr.length - 1; j > i; j--) {
//       let pivot = arr[0];

//       let curr = arr[i];
//       let comp = arr[j];

//       if (pivot > comp) {
//         let temp = comp;
//         arr[i] = temp;
//         arr[j] = curr;
//       }
//       //   console.log(curr, comp, arr);

//       if (i >= j) {
//         console.log("i = ", i, "j = ", j);
//         return arr;
//       }
//     }
//     i++;
//   }
//   return;
// }

// let array = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];

// // [51, 13, 32, 48, 22, 11, 45, 55, 78, 96, 58, 66, 88, 87];
// partitioning(array);

// function test(array) {
//   let i = 0;
//   let pivot = Math.floor(array.length / 2);

//   console.log(array[pivot]);

//   while (i <= pivot) {
//     if (array[i] > array[pivot]) {
//       let j = array.length - 1;
//       while (j > pivot) {
//         if (array[i] < array[pivot]) {
//           let tmp = array[j];
//           array[j] = array[i];
//           array[i] = tmp;
//         }

//         j--;
//       }

//       //pivot이 제일 작은 값이면
//       let tmp = array[i];
//       array[i] = array[pivot];
//       array[pivot] = tmp;
//     }
//     i++;
//   }
// }

function test(arr, start, end) {
  let i = 0;
  while (i < 50) {
    let pivot = Math.floor(arr.length / 2);

    while (arr[start] < arr[pivot]) {
      start++;
    }
    // console.log("arra.start " + arr[start]);

    console.log(arr[end]);
    while (arr[end] > arr[pivot]) {
      end--;
    }

    // console.log("arra.end : " + arr[end]);
    // console.log("pivot : " + arr[pivot]);

    console.log(start, end);

    if (start <= end) {
      //   console.log("here");

      [arr[end], arr[start]] = [arr[start], arr[end]];
      start++;
      end--;
      console.log(arr);
    }

    i++;
  }

  return start;
}
// test([3, 9, 4, 7, 5, 0, 1, 6, 8, 2], 0, 9);

// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values

function QuickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length;
  let index;

  if (len > 1) {
    index = partition(arr, left, right);

    console.log("letf = " + left, "right = " + right, "index  :" + index);

    if (left < index - 1) {
      console.log("here?");
      console.log(`quicksort( ${left}, ${index - 1} )`);
      QuickSort(arr, left, index - 1);
    }

    if (index < right) {
      console.log("or here?");
      console.log(`quicksort( ${index}, ${right} )`);
      QuickSort(arr, index, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = arr[middle],
    i = left, // Start pointer at the first item in the array
    j = right; // Start pointer at the last item in the array

  while (i <= j) {
    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while (arr[i] < pivot) {
      i++;
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while (arr[j] > pivot) {
      j--;
    }

    // If the left pointer is less than or equal to the
    // right pointer, then swap values
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
      i++;
      j--;
    }
  }

  console.log(arr);
  return i;
}

QuickSort([3, 9, 4, 7, 5, 0, 1, 6, 8, 2]);
