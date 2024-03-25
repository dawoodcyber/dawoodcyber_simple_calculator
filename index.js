#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t***** SIMPLE CALCULATOR *****");
const input = await inquirer.prompt([
    { message: "Enter your 1st Number:", type: "number", name: "num1" },
    { message: "Enter your 2nd Number:", type: "number", name: "num2" },
    { message: "Enter your operation:", type: "list", name: "options", choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
if (input.options === "Addition") {
    let add = input.num1 + input.num2;
    console.log(`\nAddition of ${input.num1} and ${input.num2} = ${add}`);
}
else if (input.options === "Subtraction") {
    let sub = input.num1 - input.num2;
    console.log(`\nSubtraction of ${input.num1} and ${input.num2} = ${sub}`);
}
else if (input.options === "Multiplication") {
    let mul = input.num1 * input.num2;
    console.log(`\nMultiplication of ${input.num1} and ${input.num2} = ${mul}`);
}
else if (input.options === "Division") {
    let div = input.num1 / input.num2;
    console.log(`\nDivision of ${input.num1} and ${input.num2} = ${div}`);
}
else {
    console.log("Invalid operator!");
}
