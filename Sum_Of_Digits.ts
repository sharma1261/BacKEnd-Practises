import { createInterface } from "node:readline";

// Create a terminal input/output interface
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your digit: ", (answer) => {
  let num: number = Number(answer);

  let sum: number = 0;

  while (num > 0) {
    const digit: number = num % 10;

    sum = sum + digit;

    num = Math.floor(num / 10);
  }

  console.log("Sum of digits is:", sum);

  if (sum % 2 === 0) {
    console.log("The sum of your digits is even.");
  } else {
    console.log("The sum of your digits is odd.");
  }

  rl.close();
});
