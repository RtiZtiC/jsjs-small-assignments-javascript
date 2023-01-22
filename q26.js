const countries = ["India", "China", "USA", "Russia", "Brazil"];

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log(countries);
}
