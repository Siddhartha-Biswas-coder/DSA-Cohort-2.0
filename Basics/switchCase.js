const prompt = require("prompt-sync")();

const day = Number(prompt("Enter day number: "));

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default:
    console.log("Give a correct day numner");
}

let s = prompt("Enter a string: ").toLowerCase();
let consonent = 0,
  vowel = 0;

for (let i = 0; i < s.length; i++) {
  let ch = s.charAt(i);
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": {
      vowel++;
      break;
    }
    default:
      consonent++;
  }
}

console.log([vowel, consonent]);


function checkChar(ch) {
  if (!/^[a-zA-Z]$/.test(ch)) return "Invalid input"
  ch = ch.toLowerCase()
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": return "Vowel"
    default: return "Consonant"
  }
}
