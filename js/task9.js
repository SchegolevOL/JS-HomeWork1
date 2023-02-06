let value = Number(prompt("Enter value."));
let tmp = value;
let result = 0;
let i = 0;
while (tmp != 0) {
  result = result * 10 + (tmp % 10);
  tmp = Math.floor(tmp / 10);
  i++;
}
alert(`result ${result}`);
