import { createInterface } from "node:readline"; // built in node module for reading input line by line

// Create a terminal input/output interface
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for a starting number
rl.question(
  "Enter number from where you want to Start Countdown : ",
  async (answer: string) => {
    // Convert the input string to a number
    let start: number = Number(answer);

    if (!Number.isInteger(start) || start <= 0) {
      console.log("Enter a valid non-negative integer or Greater than Zero");
      rl.close();
      return;
    }

    console.log("--- Countdown begins ---");

    // Continue while the number is greater than zero
    while (start > 0) {
      // Display current number
      console.log(start);

      // Wait one second asynchronously
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      // Decrease the number
      start--;
    }

    console.log("--- Time's Up ---");

    // Close the readline interface
    rl.close();
  },
);
