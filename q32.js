const countries = require('./countries')

const haveLand=[];
const twowords=[];
const fourletter=[];
let max=0;
for(let i=0;i<countries.length;i++){
    
 if (countries[i].toLowerCase().includes("land")){
    haveLand.push(countries[i]);
 }
 if (countries[i].length>=countries[max].length){
    max=i;
 }  
 if (countries[i].length==4){
    fourletter.push(countries[i]);
 }
 if (countries[i].toLowerCase().includes(" ")){
    twowords.push(countries[i]);
 }
}

console.log(haveLand)
console.log(twowords)
console.log(fourletter)
console.log(`the country with the maximum amount of characters is${countries[max]}`)