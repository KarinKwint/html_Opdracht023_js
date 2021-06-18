// While loop colors
let colors = ["yellow", "blue", "red", "orange"]
let i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++;
};
// For loop colors
let colors = ["yellow", "blue", "red", "orange"]
let i = 0

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};
// forEach
const colors = ["yellow", "blue", "red", "orange"];

colors.forEach(element => console.log(element));

const fruits = ["apple", "pear", "orange"]
const keys = Object.keys(fruits)
for (const [fruit] of entries) {
    console.log(`There are $(fruit)s`)
}