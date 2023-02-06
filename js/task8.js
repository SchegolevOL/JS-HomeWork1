let money = Number(prompt("Enter the amount of money in your wallet."));
let price = Number(prompt("Enter the price of the shekolad."));
let numberOfChocolates = Math.floor(money / price);
let balanceOfMoney = money - price*numberOfChocolates;
alert(`For ${money} $, you can buy ${numberOfChocolates} chocolates for $ ${price}, stay in your wallet for $ ${balanceOfMoney}.`);