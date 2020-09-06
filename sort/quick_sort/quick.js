const input_nu = document.getElementById("input_num");
const show = document.getElementById("show");
const btn_sort = document.getElementById("btn_sort");
const btn_init = document.getElementById("btn_init");
let sorted_arr = document.getElementById("sorted_arr");
let numbers = [];

let pivot = document.getElementById("pivot");

input_nu.addEventListener("keypress", addnumber);

function addnumber(e) {
  if (e.key == "Enter") {
    if (input_nu.value == "" || input_nu.value == " ") {
      alert("숫자를 입력해주세요");
      input_nu.value = "";
    } else if (numbers.indexOf(input_nu.value * 1) !== -1) {
      alert("같은 숫자가 존재힙니다");
      input_nu.value = "";
    } else {
      if (numbers.length >= 10) {
        alert("10개까지만 입력 가능합니다");
        input_nu.value = "";
      } else {
        let num = document.createElement("div");
        num.setAttribute("id", `${input_nu.value}`);
        numbers.push(input_nu.value * 1);
        num.innerHTML = `<h1>${input_nu.value}</h1>`;

        num.classList.add("blockNum");
        num.style.textAlign = "center";
        num.style.display = "flex";
        num.style.borderRadius = "7px";
        num.style.width = "5rem";
        num.style.height = "5rem";
        num.style.border = "1px solid lightgray";

        num.style.background = "#c291f2";

        input_nu.value = "";
        show.appendChild(num);
      }
    }
  }
}

btn_init.addEventListener("click", () => {
  numbers = [];
  show.innerHTML = "";
  pivot.innerHTML = "";
  sorted_arr.innerHTML = "";
  return;
});

btn_sort.addEventListener("click", onSortNums);

let blocks = document.querySelectorAll(".blockNum");
console.log(blocks);
// console.log(document.getElementsByClassName("blockNum"));

async function onSortNums() {
  //pivot
  let pivot_num = document.createElement("div");
  pivot_num.setAttribute("id", "pivot_num");
  pivot_num.innerHTML = `<h1> Pivot : ${numbers[0]}</h1>`;

  if (pivot.innerHTML == "") {
    pivot.appendChild(pivot_num);
  }

  if (blocks.length < 2) {
    alert("숫자를 2개 이상 입력해주세요.");
  } else {
    quickSort(numbers, (start = 0), (end = numbers.length - 1));
  }
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     alert("정렬이 완료되었습니다.");
  //   }, 300)
  // );
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  let len = arr.lenght;
  let index;

  while (len > 1) {
    index = partitioning(arr, start, end);

    if (start < index - 1) {
      quickSort(arr, start, index - 1);
    }
    if (index < end) {
      quickSort(arr, index, end);
    }
  }

  return arr;
}

function partitioning(arr, start, end) {
  let i = start;
  let j = end;

  let mid = Math.floor(start + end / 2);

  let pivot = arr[mid];
  pivot_num.innerHTML = `<h1> Pivot : ${pivot}</h1>`;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    let curr_node = blocks[i];
    let next_node = blocks[j];

    curr_node.style.backgroundColor = "tomato";
    next_node.style.backgroundColor = "tomato";

    if (i <= j) {
      // swap numbers array
      [arr[i], arr[j]] = [arr[j], arr[i]];

      [curr_node.innerHTML, next_node.innerHTML] = [
        next_node.innerHTML,
        curr_node.innerHTML,
      ];

      i++;
      j--;
    }
    blocks[j].style.backgroundColor = "orange";
    blocks[j + 1].style.backgroundColor = "orange";
  }
  return i;
}
// function swapNum(num1, num2) {
//   let temp = num2.innerHTML;
//   let temp2 = num1.innerHTML;

//   //innerHTML 바꿔주기
//   num1.innerHTML = temp;
//   num2.innerHTML = temp2;
// }
