let dollars = Number(prompt("Enter the amount of dollars"));
const course = 1.1;
let euros = Math.round(dollars * course * 100) / 100;
alert(`${dollars} dolars equals ${euros} euros`);
