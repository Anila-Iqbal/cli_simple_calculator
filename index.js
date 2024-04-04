#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Printing a Welcome message:
console.log(chalk.bgBlueBright.bold("\n\t Welcome to Anila-Iqbal cli_simple_calculator\n"));
const answer = await inquirer.prompt([
    { message: chalk.magentaBright.bold("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.magentaBright.bold("Enter second number"), type: "number", name: "secondNumber" },
    {
        message: chalk.green.bold("Select one of the operator to prefom an action"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
//Conditional statement:
if (answer.operator === "Addition") {
    console.log(chalk.yellowBright.bold(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellowBright.bold(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellowBright.bold(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.yellowBright.bold(answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Please select a valid operator");
}
