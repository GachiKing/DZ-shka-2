// const main = document.querySelector("main")
// const box = document.querySelector(".box");
// const input = document.querySelector(".input");

// input.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {

//     main.style.cssText=`border-radius:${e.target.value};`;
//   }
// });

function func() {
  let result;

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  document.getElementById("result").innerHTML = result;
}
