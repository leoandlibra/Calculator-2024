import inquirer from "inquirer";
async function calculator() {
    let loop = true;
    while (loop) {
        const userInput = await inquirer.prompt([
            {
                type: "number",
                name: "num1",
                message: "Enter First Number!"
            },
            {
                type: "number",
                name: "num2",
                message: "Enter Second Number"
            },
            {
                type: "list",
                name: "operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
                message: "Select the operator!"
            }
        ]);
        const num1 = userInput.num1;
        const num2 = userInput.num2;
        const operator = userInput.operator;
        if (num1 && num2) {
            if (operator === "Addition") {
                console.log(`\nThe Answer Of ${num1} + ${num2} = ${num1 + num2}`);
            }
            else if (operator === "Subtraction") {
                console.log(`\nThe Answer Of ${num1} - ${num2} = ${num1 - num2}`);
            }
            else if (operator === "Multiplication") {
                console.log(`\nThe Answer Of ${num1} * ${num2} = ${num1 * num2}`);
            }
            else if (operator === "Division") {
                console.log(`\nThe Answer Of ${num1} / ${num2} = ${num1 / num2}`);
            }
            else {
                console.log("Please Enter a Valid Operator");
            }
        }
        else {
            console.log("Please Enter Valid Numbers");
        }
        const calculatemore = await inquirer.prompt({
            type: "confirm",
            name: "more",
            message: "Do you want more calculation?",
            default: false
        });
        if (!calculatemore.more) {
            loop = false;
            console.log("\nThank you!");
        }
    }
}
calculator();
