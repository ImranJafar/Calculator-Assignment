#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(figlet.textSync("Digital Calculator"));
let option;
do {
    let Answar = await inquirer.prompt([
        {
            type: "list",
            name: "calculation",
            message: "Choose a function to performed operation.",
            choices: ["sum", "subtract", "multiply", "divide", "modulus"],
        },
        {
            type: "number",
            name: "number1",
            message: "Enter First Number",
        },
        {
            type: "number",
            name: "number2",
            message: "Enter Second Number",
        },
    ]);
    if (Answar.calculation == "sum") {
        console.log(chalk.bold.yellow(` Sum Result : ${Answar.number1 + Answar.number2}`));
    }
    else if (Answar.calculation == "subtract") {
        console.log(chalk.bold.yellow(`Subtraction Result : ${Answar.number1 - Answar.number2}`));
    }
    else if (Answar.calculation == "multiply") {
        console.log(chalk.bold.yellow(`Multiplation Result : ${Answar.number1 * Answar.number2}`));
    }
    else if (Answar.calculation == "divide") {
        console.log(chalk.bold.yellow(`Dividation Result : ${Answar.number1 / Answar.number2}`));
    }
    else if (Answar.calculation == "modulus") {
        console.log(chalk.bold.yellow(`Modulus Result : ${Answar.number1 % Answar.number2}`));
    }
    // choose a function to again perfomed operation.
    let choice = await inquirer.prompt([
        {
            type: "confirm",
            name: "option",
            message: "If you want to perform operation again? Press y for Yess and n for Not ",
        }
    ]);
    if (choice.option == true) {
        option = "y";
    }
    else {
        option = "n";
    }
} while (option.toLowerCase() == "y");
