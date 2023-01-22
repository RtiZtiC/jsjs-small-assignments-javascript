let sumOfEvens = 0;
let sumOfOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvens += i;
  } else {
    sumOfOdds += i;
  }
}
console.log("Sum of even numbers:", sumOfEvens);
console.log("Sum of odd numbers:", sumOfOdds);
