const inputBox = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output");
const resetBtn = document.getElementById("reset");

const romanArr = [
  { roman: "M", arabic: 1000 },
  { roman: "CM", arabic: 900 },
  { roman: "D", arabic: 500 },
  { roman: "CD", arabic: 400 },
  { roman: "C", arabic: 100 },
  { roman: "XC", arabic: 90 },
  { roman: "L", arabic: 50 },
  { roman: "XL", arabic: 40 },
  { roman: "X", arabic: 10 },
  { roman: "IX", arabic: 9 },
  { roman: "V", arabic: 5 },
  { roman: "IV", arabic: 4 },
  { roman: "I", arabic: 1 },
];

function convertToRoman(input) {
  return romanArr.reduce((result, { roman, arabic }) => {
    while (input >= arabic) {
      result += roman;
      input -= arabic;
    }
    return result;
  }, "");
}

function showError(value) {
  if (value === "") {
    return "Please enter a valid number";
  } else if (value < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if (value >= 4000) {
    return "Please enter a number less than or equal to 3999";
  }
}

function showOutput() {
  let parsed = parseInt(inputBox.value);
  outputBox.innerText = showError(inputBox.value)
    ? showError(inputBox.value)
    : convertToRoman(parsed);
}

function showReset() {
  resetBtn.classList.remove("hidden");
}

resetBtn.addEventListener("click", () => {
  inputBox.value = "";
  outputBox.innerText = "";
  resetBtn.className = "hidden"
})

inputBox.addEventListener("change", (e) => {
  showOutput();
  showReset();
});
convertBtn.addEventListener("click", () => {
  showOutput();
  showReset();
});
