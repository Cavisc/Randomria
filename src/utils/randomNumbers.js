import formatNumber from "./formatNumbers";

export default function randomNumbers(min, max, quantity, gameName) {
  if (gameName === "super sete") {
    const numbers = [];

    while (numbers.length < quantity) {
      let number = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(number);
    }

    return numbers;
  } else {
    const numbers = new Set();

    while (numbers.size < quantity) {
      let number = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(number);
    }

    return formatNumber([...numbers].sort((a, b) => a - b));
  }
}
