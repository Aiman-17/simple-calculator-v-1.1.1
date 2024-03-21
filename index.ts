#! usr/bin/env node

import inquirer from "inquirer";

const Solution = await inquirer.prompt([
  { message: "enter a first number=", type: "number", name: "firstNumber" },
  { message: "enter a second number=", type: "number", name: "secondNumber" },
  { message: "enter a third number=", type: "number", name: "thirdNumber" },
  { message: "enter a fourth number=", type: "number", name: "fourthNumber" },

  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "calculator",
    choices: [
      "multiplication",
      "division",
      "subtraction",
      "addition",
      ],
  },
]);

if (Solution.calculator === "division") {
  console.log(
    Solution.firstNumber /
      Solution.secondNumber /
      Solution.thirdNumber /
      Solution.fourthNumber
  );
} else if (Solution.calculator === "multiplication") {
  console.log(
    Solution.firstNumber *
      Solution.secondNumber *
      Solution.thirdNumber *
      Solution.fourthNumber
  );
} else if (Solution.calculator === "addition") {
  console.log(
    Solution.firstNumber +
      Solution.secondNumber +
      Solution.thirdNumber +
      Solution.fourthNumber
  );
} else if (Solution.calculator === "subtraction") {
  console.log(
    Solution.firstNumber -
      Solution.secondNumber -
      Solution.thirdNumber -
      Solution.fourthNumber
  );
} else {
  console.log("please select a valid operator");
}




