// Values and Variables
let country = 'Ecuador';
let continent = 'America';
let population = '18.00 million';

console.log("I live in " + country + ", located in " + continent + ", which has a population of around " + population);

// Data Types
let isIsland = false;
const language = 'Spanish';
console.log(isIsland ? country + " is an Island" : country + " is not an Island");

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);