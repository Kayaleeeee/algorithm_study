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
    } else if (numbers.indexOf(input_nu.value) !== -1) {
      alert("같은 숫자가 존재힙니다");
      input_nu.value = "";
    } else {
      if (numbers.length >= 10) {
        alert("10개까지만 입력 가능합니다");
        input_nu.value = "";
      } else {
        let num = document.createElement("div");
        numbers.push(input_nu.value);
        num.innerHTML = `<h1 id=${input_nu.value}>${input_nu.value}</h1>`;

        num.classList.add("block");
        num.style.textAlign = "center";
        num.style.display = "flex";
        num.style.borderRadius = "7px";
        num.style.width = "5rem";
        num.style.height = "5rem";
        num.style.backgroundColor = `rgb(${150 + input_nu.value * 10},${
          10 + input_nu.value * 2
        }, ${10 + input_nu.value * 2})`;
        input_nu.value = "";
        show.appendChild(num);
      }
    }
  }
}

btn_init.addEventListener("click", () => {
  numbers = [];
  show.innerHTML = "";
  sorted_arr.innerHTML = "";
  // count = 0;
});

btn_sort.addEventListener("click", onSortNums);

function onSortNums() {
  let blocks = document.querySelectorAll(".block");
  if (numbers.length < 2) {
    alert("숫자를 2개 이상 입력해주세요.");
  } else {
    console.log(blocks);
    for (let i = 0; i < blocks.length - 1; i++) {
      let curr_node = blocks[i];
      let next_node = blocks[i + 1];

      if (curr_node.innerText > next_node.innerText) {
        let temp = blocks[i + 1].innerHTML;
        let temp2 = blocks[i].innerHTML;

        console.log(temp);
        // let temp_style = window.getComputedStyle(temp);
        // console.log(temp_style.getPropertyValue("transform"));
        // console.log(curr_node, next_node);

        blocks[i].innerHTML = temp;
        blocks[i + 1].innerHTML = temp2;

        console.log(blocks[i].innerHTML);
        break;
      }
    }
    let new_div = document.createElement("div");
    new_div.setAttribute("class", "new_div");

    // console.log(new_div);
    let new_arr = numbers.map((num) => {
      `<div class='s_num_block' id=${num}><h1>${num}</h1></div>`;
    });

    new_arr.forEach((val) => (new_div.innerHTML += val));
    // sorted_arr.appendChild(new_div);
  }
}
