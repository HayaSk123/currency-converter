#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Creating an object containing the currencies and their exchange rates
let exchangeRates: any = {
    USD_US_Dollar: 1, // base currency
    EUR_Euro: 0.920858, // EURO
    INR_Indian_Rupee: 83.129831, // INDIAN RS
    CAD_Canadian_Dollar: 1.365625, // CANADIAN DOLLAR
    PKR_Pakistani_Rupee: 278.302455, // PAKISTANI RS
    AUD_Austrailian_Dollar: 1.504751, // AUSTRAILIAN DOLLAR
    JYP_Japenese_Yen: 156.882272, // JAPENESE YEN
    SAR_Saudia_Arabian_Riyal: 3.750000, // SAUDIA ARABIAN RIYAL
    // ADD MORE CURRENCIES IF YOU WANT
};

// Display welcome message
console.log(chalk.magenta.bold("\nWelcome to the Currency Converter!\n"));

// Ask the user to select currencies to convert from and to
let currencies = await inquirer.prompt([{
    name: "currencyfrom",
    type: "list",
    message: chalk.blue("Select the currency to convert from:"),
    choices: ["USD_US_Dollar", "EUR_Euro", "INR_Indian_Rupee", "CAD_Canadian_Dollar", "PKR_Pakistani_Rupee", "AUD_Austrailian_Dollar", "JYP_Japenese_Yen", "SAR_Saudia_Arabian_Riyal"]
},
{
    name: "currencyto",
    type: "list",
    message: chalk.blue("Select the currency to convert into:"),
    choices: ["USD_US_Dollar", "EUR_Euro", "INR_Indian_Rupee", "CAD_Canadian_Dollar", "PKR_Pakistani_Rupee", "AUD_Austrailian_Dollar", "JYP_Japenese_Yen", "SAR_Saudia_Arabian_Riyal"]
},
{
    name: "amount",
    type: "number",
    message: chalk.blue("Enter the amount you want to convert:"),
}]);

// Converting user input to the required currency using the formula 
let convertedAmount = currencies.amount * exchangeRates[currencies.currencyto] / exchangeRates[currencies.currencyfrom];

console.log(chalk.green.bold(`\nThe amount you entered is ${chalk.cyan(currencies.amount)} ${chalk.cyan(currencies.currencyfrom.replace('_', ' '))}`));
console.log(chalk.green.bold(`The converted amount is ${chalk.cyan(convertedAmount.toFixed(2))} ${chalk.cyan(currencies.currencyto.replace('_', ' '))}\n`));

// Display thank you message
console.log(chalk.magenta.bold("Thank you for using the Currency Converter!\n"));
