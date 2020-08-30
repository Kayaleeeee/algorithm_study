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
        num.setAttribute("id", `${input_nu.value}`);
        numbers.push(input_nu.value);
        num.innerHTML = `<h1>${input_nu.value}</h1>`;

        num.classList.add("block");
        num.style.textAlign = "center";
        num.style.display = "flex";
        num.style.borderRadius = "7px";
        num.style.width = "5rem";
        num.style.height = "5rem";
        num.style.border = "1px solid lightgray";

        // num.style.background = `rgba(235, 77, 75, ${1 - input_nu.value * 0.1})`;

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
});

btn_sort.addEventListener("click", onSortNums);

function onSortNums() {
  let blocks = document.querySelectorAll(".block");
  let com_arr = numbers.slice(0).sort((a, b) => a - b);

  if (blocks.length < 2) {
    alert("숫자를 2개 이상 입력해주세요.");
  } else {
    let _sorted = numbers.map((val, ind) => {
      if (val !== com_arr[ind]) {
        return false;
      }
      return true;
    });

    let sort_check = _sorted.indexOf(false) == -1;

    while (!sort_check) {
      for (let i = 0; i < blocks.length - 1; i++) {
        let curr_node = blocks[i];
        let next_node = blocks[i + 1];

        //숫자만 받아오기
        let curr_num = curr_node.innerText;
        let next_num = next_node.innerText;

        if (curr_num > next_num) {
          let temp = next_node.innerHTML;
          let temp2 = curr_node.innerHTML;

          // let temp_css = document.getElementById(`${blocks[i].innerText}`);
          // let temp2_css = document.getElementById(`${blocks[i + 1].innerText}`);

          // console.log(numbers, _sorted);

          // console.log(_sorted[i], _sorted[i + 1]);
          // temp_css.classList.add(".bounce-top");

          // console.log(test);

          //numbers array 바꿔주기
          numbers[i] = next_node.innerText;
          numbers[i + 1] = curr_node.innerText;

          //innerHTML 바꿔주기
          curr_node.innerHTML = temp;
          next_node.innerHTML = temp2;

          console.log(_sorted, numbers);
          console.log(_sorted.slice(0, i + 1));

          curr_node.style.backgroundColor = "#58B7FF";
          console.log(curr_node.style.ba);

          // _sorted.slice(i + 1).map((val, ind) => {
          //   if (val === true) {
          //     let change_col = document.getElementById(numbers[ind]);
          //     return (change_col.style.backgroundColor =
          //       "orange" && window.webkitRequestAnimationFrame("bounce-top"));
          //   }
          // });

          return;
        }
      }
    }

    alert("정렬이 완료되었습니다.");
    return;
  }
}
