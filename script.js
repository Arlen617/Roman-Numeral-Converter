const inputBox = document.getElementById("number");
const converBtn = document.getElementById("convert-btn");
const outputBox = document.getElementById("output");
// rn stands for romand numerals and an stands for Arabic numerals
const romanArr = [
  { rn: "M", an: 1000 },
  { rn: "CM", an: 900 },
  { rn: "D", an: 500 },
  { rn: "CD", an: 400 },
  { rn: "C", an: 100 },
  { rn: "XC", an: 90 },
  { rn: "L", an: 50 },
  { rn: "XL", an: 40 },
  { rn: "X", an: 10 },
  { rn: "IX", an: 9 },
  { rn: "V", an: 5 },
  { rn: "IV", an: 4 },
  { rn: "I", an: 1 },
];

function convertToRoman(input) {
  let resultNumerals = "";
  for (const x of romanArr) {
    while (input >= x.an) {
      resultNumerals += x.rn;
      input -= x.an;
    }
  }
  return resultNumerals;
}
function showOutput() {
  if (inputBox.value === "") {
    outputBox.innerText = "Please enter a valid number";
  } else if (inputBox.value < 1) {
    outputBox.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputBox.value >= 4000) {
    outputBox.innerText = "Please enter a number less than or equal to 3999";
  } else {
    let numeral = convertToRoman(inputBox.value);
    outputBox.innerText = numeral;
  }
}

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showOutput();
    inputBox.value = "";
  }
});
converBtn.addEventListener("click", () => {
  showOutput();
  inputBox.value = "";
});
