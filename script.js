const inputBox = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output");
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
  let resultNumerals = "";
  for (const { roman, arabic } of romanArr) {
    while (input >= arabic) {
      resultNumerals += roman;
      input -= arabic;
    }
  }
  return resultNumerals;
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
  outputBox.innerText = showError(inputBox.value) ? showError(inputBox.value) : convertToRoman(inputBox.value)
 
}

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showOutput();
    inputBox.value = "";
  }
});
convertBtn.addEventListener("click", () => {
  showOutput();
  inputBox.value = "";
});
