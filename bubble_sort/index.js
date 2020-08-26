const input_nu = document.getElementById("input_num");
const show = document.getElementById("show");
const btn_sort = document.getElementById("btn_sort");
const btn_init = document.getElementById("btn_init");
let sorted_arr = document.getElementById("sorted_arr");
let numbers = [];

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
      if (numbers.length > 10) {
        alert("10개까지만 입력 가능합니다");
        input_nu.value = "";
      } else {
        numbers.push(input_nu.value * 1);
        let num_block = `<div id= ${input_nu.value} class ='num_block'>
          <h1>${input_nu.value}</h1></div>`;
        input_nu.value = "";
        show.innerHTML += num_block;
      }
    }
  }
}

btn_init.addEventListener("click", () => {
  numbers = [];
  show.innerHTML = "";
  sorted_arr.innerHTML = "";
});

btn_sort.addEventListener("click", onSortNums);

function onSortNums() {
  //   let num_arr = show.childNodes;

  if (numbers.length < 2) {
    alert("숫자를 2개 이상 입력해주세요.");
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      let curr_node = numbers[i];
      let next_node = numbers[i + 1];

      if (curr_node > next_node) {
        let temp = next_node;
        numbers[i] = temp;
        numbers[i + 1] = curr_node;
        break;
      }
    }
    let show_arr = numbers.map(
      (num, ind) => `<div class='s_num_block' id=${ind}><h1>${num}</h1></div>`
    );

    show_arr.forEach((val) => (sorted_arr.innerHTML += val));
    console.log(numbers);
    console.log(sorted_arr.innerHTML);
  }
}
