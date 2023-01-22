const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort((a,b) => a-b);
console.log("Sorted ages:", sortedAges);

const minAge = Math.min(...ages);
console.log("Minimum age:", minAge);

const maxAge = Math.max(...ages);
console.log("Maximum age:", maxAge);

let medianAge;
if (sortedAges.length % 2 === 0) {
    medianAge = (sortedAges[sortedAges.length/2 -1] + sortedAges[sortedAges.length/2])/2;
} else {
    medianAge = sortedAges[Math.floor(sortedAges.length/2)];
}
console.log("Median age:", medianAge);

const averageAge = sortedAges.reduce((acc, val) => acc + val, 0) / sortedAges.length;
console.log("Average age:", averageAge);

const range = maxAge - minAge;
console.log("Range:", range);

const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log("Difference of min and average:", diffMinAvg);
console.log("Difference of max and average:", diffMaxAvg);
