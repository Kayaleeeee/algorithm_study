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
      if (numbers.length >= 10) {
        alert("10개까지만 입력 가능합니다");
        input_nu.value = "";
      } else {
        let num = document.createElement("div");
        num.setAttribute("id", `${input_nu.value}`);
        numbers.push(input_nu.value * 1);
        num.innerHTML = `<h1>${input_nu.value}</h1>`;

        num.classList.add("block");
        num.style.textAlign = "center";
        num.style.display = "flex";
        num.style.borderRadius = "7px";
        num.style.width = "5rem";
        num.style.height = "5rem";
        num.style.border = "1px solid lightgray";

        num.style.background = "orange";

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

function swapNum(num1, num2) {
  let temp = num2.innerHTML;
  let temp2 = num1.innerHTML;

  //innerHTML 바꿔주기
  num1.innerHTML = temp;
  num2.innerHTML = temp2;
}

async function onSortNums() {
  let blocks = document.querySelectorAll(".block");

  if (blocks.length < 2) {
    alert("숫자를 2개 이상 입력해주세요.");
  } else {
    let i = blocks.length - 1;
    while (i > 0) {
      for (let j = 0; j < i; j++) {
        let curr_node = blocks[j];
        let next_node = blocks[j + 1];

        curr_node.style.backgroundColor = "tomato";
        next_node.style.backgroundColor = "tomato";

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 600)
        );

        //숫자만 받아오기
        let curr_num = curr_node.innerText * 1;
        let next_num = next_node.innerText * 1;

        if (curr_num > next_num) {
          swapNum(curr_node, next_node);

          //numbers array 바꿔주기
          numbers[j] = next_num;
          numbers[j + 1] = curr_num;
        }

        blocks[j].style.backgroundColor = "orange";
        blocks[j + 1].style.backgroundColor = "orange";
      }
      //정렬 된 숫자 색 바꿔주기
      blocks[i].style.backgroundColor = "tomato";
      i--;
    }
  }
  await new Promise((resolve) =>
    setTimeout(() => {
      alert("정렬이 완료되었습니다.");
    }, 300)
  );
}
