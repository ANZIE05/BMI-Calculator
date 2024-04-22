                        //  CALCULATOR(HOME WORK)
// ADDITION
// import inquirer from "inquirer";

// const input1 = await inquirer.prompt({
//    name: "abc",
//    type: "number",
//    message: "Enter your first number",
// })

// const input2 = await inquirer.prompt({
//     name: "xyz",
//     type: "number",
//     message: "Enter your second number",
//  })

//  let calculate: number = input1.abc + input2.xyz
//  console.log(calculate);

// SUBTRACTION
// import inquirer from "inquirer";

// const input1 = await inquirer.prompt({
//    name: "abc",
//    type: "number",
//    message: "Enter your first number",
// })

// const input2 = await inquirer.prompt({
//     name: "xyz",
//     type: "number",
//     message: "Enter your second number",
//  })

//  let calculate: number = input1.abc - input2.xyz
//  console.log(calculate);

// MULTIPLICATION
// import inquirer from "inquirer";

// const input1 = await inquirer.prompt({
//    name: "abc",
//    type: "number",
//    message: "Enter your first number",
// })

// const input2 = await inquirer.prompt({
//     name: "xyz",
//     type: "number",
//     message: "Enter your second number",
//  })

//  let calculate: number = input1.abc * input2.xyz
//  console.log(calculate);

// DIVISION
// import inquirer from "inquirer";

// const input1 = await inquirer.prompt({
//     name: "abc",
//     type: "number",
//     message: "Enter your first number",
// })

// const input2 = await inquirer.prompt({
//     name: "xyz",
//     type: "number",
//     message: "Enter your second number",
// })

// let calculate: number = input1.abc / input2.xyz
// console.log(calculate);


// BMI CALCULATOR (HOME WORK)

import chalk from "chalk";

let weigthInKg = 65;
let heightInMeters = 2;
let bmiResult = weigthInKg / (heightInMeters * heightInMeters);

console.log(chalk.bgCyan.bold.underline(bmiResult));